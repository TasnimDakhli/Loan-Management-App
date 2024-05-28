import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoanService } from '../loan.service';
import { Router } from '@angular/router';
import { LoanDemand } from '../models/loan-demand';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})
export class SurveyComponent implements OnInit {
  loanForm: any;

  loan_purpose: any;
  guarantor: any;

  first_name: any;
  last_name: any;
  birthplace: any;
  birthdate: any;
  phone: any;
  applicant_street_address: any;
  applicant_city: any;
  applicant_zip: any;
  cin: any;

  basic_salary: any;
  employment_verification_letter: File | undefined;

  mortgage_street_address: any;
  mortgage_city: any;
  mortgage_zip: any;
  used_for_business: any;

  loan_amount: any;
  loan_tenure: any;

  errorMsg: string = '';

  constructor(
    private fb: FormBuilder,
    private loanService: LoanService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loanForm = this.fb.group({
      loan_purpose: ['', [Validators.required]],
      guarantor: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      birthplace: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      applicant_street_address: ['', [Validators.required]],
      applicant_city: ['', [Validators.required]],
      applicant_zip: ['', [Validators.required]],
      cin: ['', [Validators.required]],
      basic_salary: ['', [Validators.required]],
      //employment_verification_letter: ['', [Validators.required]],
      mortgage_street_address: ['', [Validators.required]],
      mortgage_city: ['', [Validators.required]],
      mortgage_zip: ['', [Validators.required]],
      used_for_business: ['', [Validators.required]],
      loan_amount: ['', [Validators.required]],
      loan_tenure: ['', [Validators.required]],
    });
  }


  onFileSelected(event: any): void {
    this.employment_verification_letter = event.target.files[0];
    // Do something with the file
  }


  onSubmit() {
    let value = this.loanForm.value;
    let demand = new LoanDemand(
      value.loan_purpose,
      value.guarantor,
      value.first_name,
      value.last_name,
      value.birthplace,
      value.birthdate,
      value.phone,
      value.applicant_street_address,
      value.applicant_city,
      value.applicant_zip,
      value.cin,
      value.basic_salary,
      //value.employment_verification_letter,
      value.mortgage_street_address,
      value.mortgage_city,
      value.mortgage_zip,
      value.used_for_business,
      value.loan_amount,
      value.loan_tenure
    );

    const formData = new FormData();
    formData.append("data",this.loanForm);
    formData.append('file', this.employment_verification_letter!, this.employment_verification_letter!.name );

    this.loanService.addLoan(formData).subscribe(
      (response: any) => {
        console.log(response);
        //go to home page or print a message to user
      },
      (error) => {
        console.log(error);
        this.errorMsg = "Veuillez vérifier vos identifiants"
      }
    );

  }

  /*onSubmit(){
    this.loanService.addLoan(this.loanForm).subscribe(
     (response: any) => {
        console.log(response);
       //go to home page or print a message to user
     },
     (error) => {
       console.log(error);
       //this.errorMsg = "Veuillez vérifier vos identifiants"
     }
   );
}*/
}
