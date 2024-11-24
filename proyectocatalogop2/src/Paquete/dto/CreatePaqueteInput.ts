import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsInt, IsDateString, IsNumber } from 'class-validator';

@InputType()
export class CreatePaqueteInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  nombrePaquete: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  descripcionPaquete: string;

  @Field(() => Float)
  @IsNumber()
  @IsNotEmpty()
  precioTotal: number;

  @Field(() => Int)
  @IsInt()
  @IsNotEmpty()
  duracionTotal: number;

  @Field(() => String)
  @IsDateString()
  @IsNotEmpty()
  fechaInicio: string;

  @Field(() => String)
  @IsDateString()
  @IsNotEmpty()
  fechaFin: string;

  @Field(() => Int)
  @IsInt()
  @IsNotEmpty()
  cupo: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  ubicacion: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  categoria: string;
}