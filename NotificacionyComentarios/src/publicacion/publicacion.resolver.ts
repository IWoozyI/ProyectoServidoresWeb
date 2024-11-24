import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PublicacionService } from './publicacion.service';
import { Publicacion } from './entities/publicacion.entity';
import { CreatePublicacionInput } from './dto/create-publicacion.input';
import { UpdatePublicacionInput } from './dto/update-publicacion.input';

@Resolver(() => Publicacion)
export class PublicacionResolver {
  constructor(private readonly publicacionService: PublicacionService) {}

  @Mutation(() => Publicacion)
  createPublicacion(@Args('createPublicacionInput') createPublicacionInput: CreatePublicacionInput): Promise<Publicacion> {
    return this.publicacionService.create(createPublicacionInput);
  }

  @Query(() => [Publicacion], { name: 'publicaciones' })
  findAll(): Promise<Publicacion[]> {
    return this.publicacionService.findAll();
  }

  @Query(() => Publicacion, { name: 'publicacion' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Publicacion> {
    return this.publicacionService.findOne(id);
  }

  @Mutation(() => Publicacion)
  updatePublicacion(@Args('updatePublicacionInput') updatePublicacionInput: UpdatePublicacionInput): Promise<Publicacion> {
    return this.publicacionService.update(updatePublicacionInput.id, updatePublicacionInput);
  }

  @Mutation(() => Publicacion)
  removePublicacion(@Args('id', { type: () => String }) id: string): Promise<Publicacion> {
    return this.publicacionService.remove(id);
  }
}
