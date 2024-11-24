import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateClienteInput {

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  nombre:string

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  email:string
}
