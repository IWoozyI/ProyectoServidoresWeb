import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePaqueteInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  descripcion:string

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  precio:string
}
