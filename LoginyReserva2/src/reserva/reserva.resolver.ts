import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { ReservaService } from './reserva.service';
import { Reserva } from './entities/reserva.entity';
import { CreateReservaInput } from './dto/create-reserva.input';
import { UpdateReservaInput } from './dto/update-reserva.input';
import { ReservaGateway } from './reserva.gateway';
import { pubSub } from '../pubsub';

@Resolver(() => Reserva)
export class ReservaResolver {
  constructor(
    private readonly reservaService: ReservaService,
    private readonly reservaGateway: ReservaGateway,
  ) {}

  @Mutation(() => Reserva)
  async createReserva(@Args('createReservaInput') input: CreateReservaInput): Promise<Reserva> {
    const nuevaReserva = this.reservaService.create(input);

    pubSub.publish('reservaCreada', { reservaCreada: nuevaReserva });
    this.reservaGateway.emitReservaActualizada('nuevaReserva', nuevaReserva);

    return nuevaReserva;
  }

  @Query(() => [Reserva], { name: 'reservas' })
  async findAll(): Promise<Reserva[]> {
    return this.reservaService.findAll();
  }

  @Mutation(() => Reserva)
  async updateReserva(@Args('updateReservaInput') input: UpdateReservaInput): Promise<Reserva> {
    const reserva = this.reservaService.update(input.id, input);

    pubSub.publish('reservaActualizada', { reservaActualizada: reserva });
    this.reservaGateway.emitReservaActualizada('actualizarReserva', reserva);

    return reserva;
  }

  @Subscription(() => Reserva, { name: 'reservaCreada' })
  reservaCreada() {
    return pubSub.asyncIterator('reservaCreada');
  }

  @Subscription(() => Reserva, { name: 'reservaActualizada' })
  reservaActualizada() {
    return pubSub.asyncIterator('reservaActualizada');
  }
}
