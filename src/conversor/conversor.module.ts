import { Module } from '@nestjs/common';
import { ConversorController } from './controller/conversor.controller';
import { ConversorService } from './service/conversor.service';

@Module({
  controllers: [ConversorController],
  providers: [ConversorService],
})
export class ConversorModule {}
