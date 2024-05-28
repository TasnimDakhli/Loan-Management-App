export class CreateLoanApplicationDto {
  loan_purpose: string;
  guarantor: boolean;
  first_name: string;
  last_name: string;
  birthplace: string;
  birthdate: Date;
  phone: number;
  applicant_street_address: string;
  applicant_city: string;
  applicant_zip: number;
  cin: number;
  basic_salary: number;
  mortgage_street_address: string;
  mortgage_city: string;
  mortgage_zip: number;
  used_for_business: boolean;
  loan_amount: number;
  loan_tenure: number;
  employer?: string;
}
