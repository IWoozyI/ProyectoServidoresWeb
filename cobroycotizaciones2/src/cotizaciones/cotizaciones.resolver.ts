import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CotizacionService } from './cotizaciones.service';
import { Cotizacion } from './entities/cotizaciones.entity';
import { CreateCotizacionInput } from './dto/create-cotizaciones.input';
import { UpdateCotizacionInput } from './dto/update-cotizaciones.input';

@Resolver(() => Cotizacion)
export class CotizacionResolver {
  constructor(private readonly cotizacionService: CotizacionService) {}

  @Mutation(() => Cotizacion)
  createCotizacion(@Args('createCotizacionInput') createCotizacionInput: CreateCotizacionInput): Promise<Cotizacion> {
    return this.cotizacionService.create(createCotizacionInput);
  }

  @Query(() => [Cotizacion], { name: 'cotizaciones' })
  findAll(): Promise<Cotizacion[]> {
    return this.cotizacionService.findAll();
  }

  @Query(() => Cotizacion, { name: 'cotizacion' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Cotizacion> {
    return this.cotizacionService.findOne(id);
  }

  @Mutation(() => Cotizacion)
  updateCotizacion(@Args('updateCotizacionInput') updateCotizacionInput: UpdateCotizacionInput): Promise<Cotizacion> {
    return this.cotizacionService.update(updateCotizacionInput.id, updateCotizacionInput);
  }

  @Mutation(() => Cotizacion)
  removeCotizacion(@Args('id', { type: () => String }) id: string): Promise<Cotizacion> {
    return this.cotizacionService.remove(id);
  }
}
