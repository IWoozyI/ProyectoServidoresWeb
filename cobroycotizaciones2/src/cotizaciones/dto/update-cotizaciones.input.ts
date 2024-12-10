import { CreateCotizacionInput } from './create-cotizaciones.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCotizacionInput extends PartialType(CreateCotizacionInput) {
  @Field(() => String)
  id: string;
}
