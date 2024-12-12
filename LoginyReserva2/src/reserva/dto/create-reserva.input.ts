import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateReservaInput {
  @Field(() => String)
    @IsString()
    @IsNotEmpty()
  fechareserva:string

  @Field(() => String)
    @IsString()
    @IsNotEmpty()
  ID_Cliente: string

  @Field(() => String)
    @IsString()
    @IsNotEmpty()
  ID_Paquete: string
}
