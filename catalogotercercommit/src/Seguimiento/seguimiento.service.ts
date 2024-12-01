import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seguimiento } from './entities/seguimiento.entity';
import { CreateSeguimientoDto } from './dto/create-seguimiento.dto';
import { UpdateSeguimientoDto } from './dto/update-seguimiento.dto';

@Injectable()
export class SeguimientoService {
  constructor(
    @InjectRepository(Seguimiento)
    private readonly seguimientoRepository: Repository<Seguimiento>,
  ) {}

  async create(createSeguimientoDto: CreateSeguimientoDto): Promise<Seguimiento> {
    const seguimiento = this.seguimientoRepository.create(createSeguimientoDto);
    return this.seguimientoRepository.save(seguimiento);
  }

  async findAll(): Promise<Seguimiento[]> {
    return this.seguimientoRepository.find();
  }

  async findOne(id: number): Promise<Seguimiento> {
    return this.seguimientoRepository.findOne({ where: { id } });
  }

  async findByPaqueteId(paqueteId: number): Promise<Seguimiento[]> {
    return this.seguimientoRepository.find({ where: { paquete: { idPaquete: paqueteId } } });
  }

  async update(
    id: number,
    updateSeguimientoDto: UpdateSeguimientoDto,
  ): Promise<Seguimiento> {
    await this.seguimientoRepository.update(id, updateSeguimientoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.seguimientoRepository.delete(id);
  }
}