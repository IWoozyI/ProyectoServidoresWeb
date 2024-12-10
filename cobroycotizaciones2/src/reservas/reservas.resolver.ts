import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReservaService } from './reservas.service';
import { Reserva } from './entities/reservas.entity';
import { CreateReservaInput } from './dto/create-reserva.input';
import { UpdateReservaInput } from './dto/update-reserva.input';

@Resolver(() => Reserva)
export class ReservaResolver {
  constructor(private readonly reservaService: ReservaService) {}

  @Mutation(() => Reserva)
  createReserva(@Args('createReservaInput') createReservaInput: CreateReservaInput): Promise<Reserva> {
    return this.reservaService.create(createReservaInput);
  }

  @Query(() => [Reserva], { name: 'reservas' })
  findAll(): Promise<Reserva[]> {
    return this.reservaService.findAll();
  }

  @Query(() => Reserva, { name: 'reserva' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Reserva> {
    return this.reservaService.findOne(id);
  }

  @Mutation(() => Reserva)
  updateReserva(@Args('updateReservaInput') updateReservaInput: UpdateReservaInput): Promise<Reserva> {
    return this.reservaService.update(updateReservaInput.id, updateReservaInput);
  }

  @Mutation(() => Reserva)
  removeReserva(@Args('id', { type: () => String }) id: string): Promise<Reserva> {
    return this.reservaService.remove(id);
  }
}
