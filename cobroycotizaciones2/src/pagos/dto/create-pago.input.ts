import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePagoInput {
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
