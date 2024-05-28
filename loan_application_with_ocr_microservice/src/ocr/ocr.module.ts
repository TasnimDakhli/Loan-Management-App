import { Module } from '@nestjs/common';
import { LoanApplicationService } from '../loan_application/loan_application.service';
import { OcrService } from './ocr.service';

@Module({
  providers: [OcrService],
  exports: [OcrService],
})
export class OcrModule {}
