import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PaqueteService } from './paquete.service';
import { Paquete } from './entities/paquete.entity';
import { CreatePaqueteInput } from './dto/create-paquete.input';
import { UpdatePaqueteInput } from './dto/update-paquete.input';

@Resolver(() => Paquete)
export class PaqueteResolver {
  constructor(private readonly paqueteService: PaqueteService) {}

  @Mutation(() => Paquete)
  createPaquete(@Args('createPaqueteInput') createPaqueteInput: CreatePaqueteInput): Promise<Paquete> {
    return this.paqueteService.create(createPaqueteInput);
  }

  @Query(() => [Paquete], { name: 'paquetes' })
  findAll(): Promise<Paquete[]> {
    return this.paqueteService.findAll();
  }

  @Query(() => Paquete, { name: 'paquete' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Paquete> {
    return this.paqueteService.findOne(id);
  }

  @Mutation(() => Paquete)
  updatePaquete(@Args('updatePaqueteInput') updatePaqueteInput: UpdatePaqueteInput): Promise<Paquete> {
    return this.paqueteService.update(updatePaqueteInput.id, updatePaqueteInput);
  }

  @Mutation(() => Paquete)
  removePaquete(@Args('id', { type: () => String }) id: string): Promise<Paquete> {
    return this.paqueteService.remove(id);
  }
}
