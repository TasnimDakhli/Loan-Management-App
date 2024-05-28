import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LoanApplication {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  loan_purpose: string;
  @Column()
  guarantor: boolean;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  birthplace: string;
  @Column()
  birthdate: Date;
  @Column()
  phone: number;
  @Column()
  applicant_street_address: string;
  @Column()
  applicant_city: string;
  @Column()
  applicant_zip: number;
  @Column()
  cin: number;
  @Column()
  basic_salary: number;
  @Column()
  mortgage_street_address: string;
  @Column()
  mortgage_city: string;
  @Column()
  mortgage_zip: number;
  @Column()
  used_for_business: boolean;
  @Column()
  loan_amount: number;
  @Column()
  loan_tenure: number;
  @Column()
  employer: string;
}
