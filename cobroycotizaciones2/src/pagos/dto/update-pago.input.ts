import { CreatePagoInput } from './create-pago.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePagoInput extends PartialType(CreatePagoInput) {
  @Field(() => String)
  id: string;
}
