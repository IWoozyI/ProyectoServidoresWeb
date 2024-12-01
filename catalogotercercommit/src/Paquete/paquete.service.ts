import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paquete } from './entities/paquete.entity';
import { CreatePaqueteInput } from './dto/CreatePaqueteInput';
import { UpdatePaqueteInput } from './dto/UpdatePaqueteInput';

@Injectable()
export class PaqueteService {
  constructor(
    @InjectRepository(Paquete)
    private readonly paqueteRepository: Repository<Paquete>,
  ) {}

  async findAll(): Promise<Paquete[]> {
    return this.paqueteRepository.find({ relations: ['actividades'] });
  }

  async findOne(id: number): Promise<Paquete> {
    return this.paqueteRepository.findOne({ where: { idPaquete: id }, relations: ['actividades'] });
  }

  async create(createPaqueteDto: CreatePaqueteInput): Promise<Paquete> {
    const paquete = this.paqueteRepository.create(createPaqueteDto);
    return this.paqueteRepository.save(paquete);
  }

  async update(id: number, updatePaqueteDto: UpdatePaqueteInput): Promise<Paquete> {
    const paquete = await this.paqueteRepository.findOne({ where: { idPaquete: id } });
    if (!paquete) throw new Error('Paquete no encontrado');
    
    Object.assign(paquete, updatePaqueteDto);
    return this.paqueteRepository.save(paquete);
  }

  async remove(id: number): Promise<boolean> {
    const paquete = await this.paqueteRepository.findOne({ where: { idPaquete: id } });
    if (!paquete) throw new Error('Paquete no encontrado');

    await this.paqueteRepository.remove(paquete);
    return true;
  }
}