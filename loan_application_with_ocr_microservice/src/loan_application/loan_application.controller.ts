import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateLoanApplicationDto } from './dto/create_loan_application.dto';
import { LoanApplicationService } from './loan_application.service';
import * as fs from 'fs';

@Controller('loan-application')
export class LoanApplicationController {
  constructor(private loanApplicationService: LoanApplicationService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async loanApplication(@UploadedFile() file, @Body() body) {
    const createLoanApplicationDto: CreateLoanApplicationDto = JSON.parse(
      body['data'],
    );
    const fileName = file.originalname;
    const filePath = __dirname + '/../../files/' + fileName;

    // save file to disk
    const writeStream = fs.createWriteStream(filePath);
    writeStream.write(file.buffer);
    writeStream.end();
    await this.loanApplicationService.addLoanApplication(
      createLoanApplicationDto,
      file,
    );
  }
}
