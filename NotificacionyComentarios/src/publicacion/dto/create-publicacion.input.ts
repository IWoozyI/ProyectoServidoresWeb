import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePublicacionInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  titulo:string

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  contenido:string

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  fechapublicacion:string
  
}
