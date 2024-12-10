import { CreateReservaInput } from './create-reserva.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReservaInput extends PartialType(CreateReservaInput) {
  @Field(() => String)
  id: string;
}
