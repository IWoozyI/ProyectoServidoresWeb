import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateReservaInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  cliente: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @Field(() => Date)
  @IsNotEmpty()
  fechaReserva: Date;

  @Field(() => Number)
  @IsNotEmpty()
  monto: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  estado: string;
}
