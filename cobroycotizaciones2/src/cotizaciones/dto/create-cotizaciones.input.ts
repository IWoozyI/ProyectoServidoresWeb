import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCotizacionInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  cliente: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @Field(() => Number)
  @IsNotEmpty()
  monto: number;

  @Field(() => Date)
  @IsNotEmpty()
  fecha: Date;
}
