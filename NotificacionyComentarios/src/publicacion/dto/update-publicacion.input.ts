import { CreatePublicacionInput } from './create-publicacion.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdatePublicacionInput extends PartialType(CreatePublicacionInput) {
  
  @Field(() => ID)
  id: string;
}
