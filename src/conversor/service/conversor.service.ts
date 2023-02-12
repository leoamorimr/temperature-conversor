import { Injectable } from '@nestjs/common';
import { InputValuesDto } from '../dto/input-values.dto';
import { FormatEnum } from '../enum/format.enum';

@Injectable()
export class ConversorService {
  convert(query: InputValuesDto) {
    if (query.to.toUpperCase() === FormatEnum.CE.toUpperCase()) {
      return this.convertFhToCe(query.value).toPrecision(2) + 'ºC';
    }
    return this.convertCeToFh(query.value) + 'ºF';
  }

  private convertFhToCe(value: number) {
    return (value - 32) * (5 / 9);
  }
  private convertCeToFh(value: number) {
    return value * 1.8 + 32;
  }
}
