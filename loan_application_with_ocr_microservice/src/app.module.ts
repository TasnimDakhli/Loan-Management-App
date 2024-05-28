import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoanApplicationModule } from './loan_application/loan_application.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanApplication } from './loan_application/entity/loan_application.entity';
import { OcrService } from './ocr/ocr.service';
import { OcrModule } from './ocr/ocr.module';
import { FileSystemModule } from './file_system/file_system.module';

@Module({
  imports: [
    LoanApplicationModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      username: 'root',
      password: '',
      database: 'loan_application',
      host: 'localhost',
      entities: [LoanApplication],
      synchronize: true,
    }),
    OcrModule,
    FileSystemModule,
  ],
  controllers: [AppController],
  providers: [AppService, OcrService],
})
export class AppModule {}
