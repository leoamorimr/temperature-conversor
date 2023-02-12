import { Controller, Get, Param, Query } from '@nestjs/common';
import { InputValuesDto } from '../dto/input-values.dto';
import { ConversorService } from '../service/conversor.service';

@Controller('conversor')
export class ConversorController {
  constructor(private readonly conversorService: ConversorService) {}

  @Get()
  convert(@Query() query: InputValuesDto) {
    return this.conversorService.convert(query);
  }
}
