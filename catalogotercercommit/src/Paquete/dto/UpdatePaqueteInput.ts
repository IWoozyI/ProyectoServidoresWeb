import { CreatePaqueteInput } from './CreatePaqueteInput';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePaqueteInput extends PartialType(CreatePaqueteInput) {
  @Field(() => ID)
  idPaquete: number;
}