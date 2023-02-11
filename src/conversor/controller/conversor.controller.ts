import { Controller, Get, Param } from '@nestjs/common';
import { InputValuesDto } from '../dto/input-values.dto';

@Controller('conversor')
export class ConversorController {
  @Get()
  convert(@Param() inputValues: InputValuesDto) {
    return JSON.stringify(inputValues);
  }
}
