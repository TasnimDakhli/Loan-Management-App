import { Injectable } from '@nestjs/common';
import * as pdfParse from 'pdf-parse';

@Injectable()
export class OcrService {
  async readPDF(file) {
    const pdfBuffer = file.buffer;
    const pdf = await pdfParse(pdfBuffer);

    return pdf.text;
  }
}
