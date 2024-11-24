import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateReservaInput {
  @Field(() => String)
  fechareserva:string
}
