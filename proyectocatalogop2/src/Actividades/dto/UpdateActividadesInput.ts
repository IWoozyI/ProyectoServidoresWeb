import { CreateActividadInput } from './CreateActividadInput';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateActividadInput extends PartialType(CreateActividadInput) {
  @Field(() => ID)
  idActividad: number;
}