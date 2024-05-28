import { Module } from '@nestjs/common';
import { FileSystemService } from './file_system.service';

@Module({
  providers: [FileSystemService],
})
export class FileSystemModule {}
