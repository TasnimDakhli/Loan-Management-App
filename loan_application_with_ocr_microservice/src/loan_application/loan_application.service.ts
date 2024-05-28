import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoanApplication } from './entity/loan_application.entity';
import { Repository } from 'typeorm';
import { CreateLoanApplicationDto } from './dto/create_loan_application.dto';
import { OcrService } from '../ocr/ocr.service';

@Injectable()
export class LoanApplicationService {
  constructor(
    @InjectRepository(LoanApplication)
    private loanApplicationRepository: Repository<LoanApplication>,
    private ocrService: OcrService,
  ) {}

  async addLoanApplication(loanApplication: CreateLoanApplicationDto, file) {
    const content: string = await this.ocrService.readPDF(file);
    const words = content.split(' ');
    let isEmployerFound = false;
    let isAddressFound = false;
    const employerWords = [];

    for (let i = 0; i < words.length; i++) {
      if (words[i].toLowerCase().includes('employer:')) {
        isEmployerFound = true;
        continue;
      }

      if (words[i].toLowerCase().includes('address:')) {
        isAddressFound = true;
        break;
      }

      if (isEmployerFound && !isAddressFound) {
        employerWords.push(words[i]);
      }
    }

    const employerName = employerWords.join(' ');

    const newDto: CreateLoanApplicationDto = {
      loan_purpose: loanApplication.loan_purpose,
      guarantor: loanApplication.guarantor,
      first_name: loanApplication.first_name,
      last_name: loanApplication.last_name,
      birthplace: loanApplication.birthplace,
      birthdate: loanApplication.birthdate,
      phone: loanApplication.phone,
      applicant_street_address: loanApplication.applicant_street_address,
      applicant_city: loanApplication.applicant_city,
      applicant_zip: loanApplication.applicant_zip,
      cin: loanApplication.cin,
      basic_salary: loanApplication.basic_salary,
      mortgage_street_address: loanApplication.mortgage_street_address,
      mortgage_city: loanApplication.mortgage_city,
      mortgage_zip: loanApplication.mortgage_zip,
      used_for_business: loanApplication.used_for_business,
      loan_amount: loanApplication.loan_amount,
      loan_tenure: loanApplication.loan_tenure,
      employer: employerName.trim(),
    };

    await this.loanApplicationRepository.save(newDto);
  }
}
