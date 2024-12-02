import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateComentarioInput {

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  contenido:string

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  fechayhora:string
}
