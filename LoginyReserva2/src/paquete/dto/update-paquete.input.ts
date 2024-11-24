import { CreatePaqueteInput } from './create-paquete.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdatePaqueteInput extends PartialType(CreatePaqueteInput) {
  @Field(() => ID)
  id: string;
}
