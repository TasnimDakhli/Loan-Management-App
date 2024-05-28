import { LoanPurpose } from "src/enums/loan-purpose";

export class LoanDemand {
  id?: number;
  loan_purpose: LoanPurpose;
  guarantor: boolean;

  first_name: string;
  last_name: string;
  birthplace: string;
  birthDate: Date;
  phone: string;
  applicant_street_address: string;
  applicant_city: string;
  applicant_zip: number;
  cin: number;

  basic_salary: number;
  //employment_verification_letter: File;

  mortgage_street_address: string;
  mortgage_city: string;
  mortgage_zip: number;
  used_for_business: boolean;

  loan_amount: number;
  loan_tenure: number;

  constructor(loan_purpose: LoanPurpose, guarantor: boolean, first_name: string, last_name: string, birthplace: string, birthDate: Date, phone: string, applicant_street_address: string, applicant_city: string, applicant_zip: number, cin: number, basic_salary: number,/* employment_verification_letter: File*/ mortgage_street_address: string, mortgage_city: string, mortgage_zip: number, used_for_business: boolean, loan_amount: number, loan_tenure: number) {
    this.loan_purpose = loan_purpose;
    this.guarantor = guarantor;
    this.first_name = first_name;
    this.last_name = last_name;
    this.birthplace = birthplace;
    this.birthDate = birthDate;
    this.phone = phone;
    this.applicant_street_address = applicant_street_address;
    this.applicant_city = applicant_city;
    this.applicant_zip = applicant_zip;
    this.cin = cin;
    this.basic_salary = basic_salary;
    //this.employment_verification_letter = employment_verification_letter;
    this.mortgage_street_address = mortgage_street_address;
    this.mortgage_city = mortgage_city;
    this.mortgage_zip = mortgage_zip;
    this.used_for_business = used_for_business;
    this.loan_amount = loan_amount;
    this.loan_tenure = loan_tenure;
  }
}
