import { CreateReservaInput } from './create-reserva.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateReservaInput extends PartialType(CreateReservaInput) {
  @Field(() => ID)
  id: string;
}
