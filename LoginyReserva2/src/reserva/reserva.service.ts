import { Injectable } from '@nestjs/common';
import { CreateReservaInput } from './dto/create-reserva.input';
import { UpdateReservaInput } from './dto/update-reserva.input';
import { Reserva } from './entities/reserva.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReservaService {

  constructor(
    @InjectRepository(Reserva)
    private readonly reservaRepository:Repository<Reserva>
  ){}

  async create(createReservaInput: CreateReservaInput): Promise<Reserva> {
    const crear= this.reservaRepository.create(createReservaInput);
    return await this.reservaRepository.save(crear);
  }

  async findAll(): Promise<Reserva[]> {
    return await this.reservaRepository.find();
  }

  async findOne(id: string): Promise<Reserva> {
    return await this.reservaRepository.findOneBy({id});
  }

  async update(id: string, updateReservaInput: UpdateReservaInput): Promise<Reserva> {
    const cambio= await this.reservaRepository.preload(updateReservaInput);
    if (!cambio) {
      throw new Error ("Cliente no encontrado")
    }
    return await this.reservaRepository.save(cambio);
  }

  async remove(id: string): Promise<Reserva> {
    const remover= await this.reservaRepository.findOne({where:{id}});
    if (!remover) {
      throw new Error ("Cliente no encontrado")
    }
    await this.reservaRepository.remove(remover);
    return {...remover,id};
  }
}
