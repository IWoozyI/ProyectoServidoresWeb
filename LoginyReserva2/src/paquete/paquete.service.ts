import { Injectable } from '@nestjs/common';
import { CreatePaqueteInput } from './dto/create-paquete.input';
import { UpdatePaqueteInput } from './dto/update-paquete.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Paquete } from './entities/paquete.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaqueteService {

  constructor(
    @InjectRepository(Paquete)
    private readonly paqueteRepository:Repository<Paquete>
  ){}

  async create(createPaqueteInput: CreatePaqueteInput): Promise<Paquete> {
    const crear= this.paqueteRepository.create(createPaqueteInput);
    return await this.paqueteRepository.save(crear);
  }

  async findAll(): Promise<Paquete[]> {
    return await this.paqueteRepository.find();
  }

  async findOne(id: string): Promise<Paquete> {
    return await this.paqueteRepository.findOneBy({id});
  }

  async update(id: string, updatePaqueteInput: UpdatePaqueteInput): Promise<Paquete> {
    const cambio= await this.paqueteRepository.preload(updatePaqueteInput);
    if (!cambio) {
      throw new Error ("Cliente no encontrado")
    }
    return await this.paqueteRepository.save(cambio);
  }

  async remove(id: string): Promise<Paquete> {
    const remover= await this.paqueteRepository.findOne({where:{id}});
    if (!remover) {
      throw new Error ("Cliente no encontrado")
    }
    await this.paqueteRepository.remove(remover);
    return {...remover,id};
  }
}
