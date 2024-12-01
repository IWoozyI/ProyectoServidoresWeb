import { PartialType } from '@nestjs/mapped-types';
import { CreateSeguimientoDto } from './create-seguimiento.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateSeguimientoDto extends PartialType(CreateSeguimientoDto) {
  @IsOptional()
  @IsString()
  fechaUltimaActualizacion?: string;
}