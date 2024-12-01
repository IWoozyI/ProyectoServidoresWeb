import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Actividad } from './entities/actividad.entity';
import { ActividadService } from './actividad.service';

@Resolver(() => Actividad)
export class ActividadResolver {
  constructor(private readonly actividadService: ActividadService) {}

  @Query(() => [Actividad])
  async actividades(): Promise<Actividad[]> {
    return this.actividadService.findAll();
  }

  @Query(() => Actividad)
  async actividad(@Args('id') id: number): Promise<Actividad> {
    return this.actividadService.findOne(id);
  }

  @Mutation(() => Actividad)
  async createActividad(
    @Args('nombreActividad') nombreActividad: string,
    @Args('descripcionActividad') descripcionActividad: string,
    @Args('fecha') fecha: string,
    @Args('lugar') lugar: string,
    @Args('categoria') categoria: string,
  ): Promise<Actividad> {
    return this.actividadService.create({
      nombreActividad,
      descripcionActividad,
      fecha,
      lugar,
      categoria,
    });
  }

  @Mutation(() => Actividad)
  async updateActividad(
    @Args('id') id: number,
    @Args('nombreActividad') nombreActividad: string,
    @Args('descripcionActividad') descripcionActividad: string,
    @Args('fecha') fecha: string,
    @Args('lugar') lugar: string,
    @Args('categoria') categoria: string,
  ): Promise<Actividad> {
    return this.actividadService.update(id, {
      nombreActividad,
      descripcionActividad,
      fecha,
      lugar,
      categoria,
    });
  }

  @Mutation(() => Boolean)
  async removeActividad(@Args('id') id: number): Promise<boolean> {
    return this.actividadService.remove(id);
  }
}