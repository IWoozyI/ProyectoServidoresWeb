import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Paquete } from './entities/paquete.entity';
import { PaqueteService } from './paquete.service';

@Resolver(() => Paquete)
export class PaqueteResolver {
  constructor(private readonly paqueteService: PaqueteService) {}

  @Query(() => [Paquete])
  async paquetes(): Promise<Paquete[]> {
    return this.paqueteService.findAll();
  }

  @Query(() => Paquete)
  async paquete(@Args('id') id: number): Promise<Paquete> {
    return this.paqueteService.findOne(id);
  }

  @Mutation(() => Paquete)
  async createPaquete(
    @Args('nombrePaquete') nombrePaquete: string,
    @Args('descripcionPaquete') descripcionPaquete: string,
    @Args('precioTotal') precioTotal: number,
    @Args('duracionTotal') duracionTotal: number,
    @Args('fechaInicio') fechaInicio: Date,
    @Args('fechaFin') fechaFin: Date,
    @Args('cupo') cupo: number,
    @Args('ubicacion') ubicacion: string,
    @Args('categoria') categoria: string,
  ): Promise<Paquete> {
    return this.paqueteService.create({
      nombrePaquete,
      descripcionPaquete,
      precioTotal,
      duracionTotal,
      fechaInicio,
      fechaFin,
      cupo,
      ubicacion,
      categoria,
    });
  }

  @Mutation(() => Paquete)
  async updatePaquete(
    @Args('id') id: number,
    @Args('nombrePaquete') nombrePaquete: string,
    @Args('descripcionPaquete') descripcionPaquete: string,
    @Args('precioTotal') precioTotal: number,
    @Args('duracionTotal') duracionTotal: number,
    @Args('fechaInicio') fechaInicio: Date,
    @Args('fechaFin') fechaFin: Date,
    @Args('cupo') cupo: number,
    @Args('ubicacion') ubicacion: string,
    @Args('categoria') categoria: string,
  ): Promise<Paquete> {
    return this.paqueteService.update(id, {
      nombrePaquete,
      descripcionPaquete,
      precioTotal,
      duracionTotal,
      fechaInicio,
      fechaFin,
      cupo,
      ubicacion,
      categoria,
    });
  }

  @Mutation(() => Boolean)
  async removePaquete(@Args('id') id: number): Promise<boolean> {
    return this.paqueteService.remove(id);
  }
}