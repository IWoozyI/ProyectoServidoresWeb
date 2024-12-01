import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateSeguimientoDto {
  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsOptional()
  @IsString()
  fechaUltimaActualizacion?: string;

  @IsNotEmpty()
  paqueteId: number;
}