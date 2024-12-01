import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

@InputType()
export class CreateActividadInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  nombreActividad: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  descripcionActividad: string;

  @Field(() => String)
  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  lugar: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  categoria: string;
}