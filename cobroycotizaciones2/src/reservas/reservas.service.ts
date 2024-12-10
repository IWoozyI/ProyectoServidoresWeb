import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservaInput } from './dto/create-reserva.input';
import { UpdateReservaInput } from './dto/update-reserva.input';
import { Reserva } from './entities/reservas.entity';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva)
    private readonly reservaRepository: Repository<Reserva>,
  ) {}

  async create(createReservaInput: CreateReservaInput): Promise<Reserva> {
    const nuevaReserva = this.reservaRepository.create(createReservaInput);
    return await this.reservaRepository.save(nuevaReserva);
  }

  async findAll(): Promise<Reserva[]> {
    return await this.reservaRepository.find();
  }

  async findOne(id: string): Promise<Reserva> {
    const reserva = await this.reservaRepository.findOneBy({ id });
    if (!reserva) {
      throw new Error('Reserva no encontrada');
    }
    return reserva;
  }

  async update(id: string, updateReservaInput: UpdateReservaInput): Promise<Reserva> {
    const reserva = await this.reservaRepository.preload(updateReservaInput);
    if (!reserva) {
      throw new Error('Reserva no encontrada');
    }
    return await this.reservaRepository.save(reserva);
  }

  async remove(id: string): Promise<Reserva> {
    const reserva = await this.reservaRepository.findOneBy({ id });
    if (!reserva) {
      throw new Error('Reserva no encontrada');
    }
    await this.reservaRepository.remove(reserva);
    return { ...reserva, id };
  }
}
