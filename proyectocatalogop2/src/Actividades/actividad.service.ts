import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Actividad } from './entities/actividad.entity';
import { CreateActividadInput } from './dto/CreateActividadInput';
import { UpdateActividadInput } from './dto/UpdateActividadesInput';

@Injectable()
export class ActividadService {
  constructor(
    @InjectRepository(Actividad)
    private readonly actividadRepository: Repository<Actividad>,
  ) {}

  async findAll(): Promise<Actividad[]> {
    return this.actividadRepository.find({ relations: ['paquetes'] });
  }

  async findOne(id: number): Promise<Actividad> {
    return this.actividadRepository.findOne({ where: { idActividad: id }, relations: ['paquetes'] });
  }

  async create(createActividadDto: CreateActividadInput): Promise<Actividad> {
    const actividad = this.actividadRepository.create(createActividadDto);
    return this.actividadRepository.save(actividad);
  }

  async update(id: number, updateActividadDto: UpdateActividadInput): Promise<Actividad> {
    const actividad = await this.actividadRepository.findOne({ where: { idActividad: id } });
    if (!actividad) throw new Error('Actividad no encontrada');
    
    Object.assign(actividad, updateActividadDto);
    return this.actividadRepository.save(actividad);
  }

  async remove(id: number): Promise<boolean> {
    const actividad = await this.actividadRepository.findOne({ where: { idActividad: id } });
    if (!actividad) throw new Error('Actividad no encontrada');

    await this.actividadRepository.remove(actividad);
    return true;
  }
}