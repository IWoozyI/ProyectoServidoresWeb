import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCotizacionInput } from './dto/create-cotizaciones.input';
import { UpdateCotizacionInput } from './dto/update-cotizaciones.input';
import { Cotizacion } from './entities/cotizaciones.entity';

@Injectable()
export class CotizacionService {
  constructor(
    @InjectRepository(Cotizacion)
    private readonly cotizacionRepository: Repository<Cotizacion>,
  ) {}

  async create(createCotizacionInput: CreateCotizacionInput): Promise<Cotizacion> {
    const nuevaCotizacion = this.cotizacionRepository.create(createCotizacionInput);
    return await this.cotizacionRepository.save(nuevaCotizacion);
  }

  async findAll(): Promise<Cotizacion[]> {
    return await this.cotizacionRepository.find();
  }

  async findOne(id: string): Promise<Cotizacion> {
    const cotizacion = await this.cotizacionRepository.findOneBy({ id });
    if (!cotizacion) {
      throw new Error('Cotización no encontrada');
    }
    return cotizacion;
  }

  async update(id: string, updateCotizacionInput: UpdateCotizacionInput): Promise<Cotizacion> {
    const cotizacion = await this.cotizacionRepository.preload(updateCotizacionInput);
    if (!cotizacion) {
      throw new Error('Cotización no encontrada');
    }
    return await this.cotizacionRepository.save(cotizacion);
  }

  async remove(id: string): Promise<Cotizacion> {
    const cotizacion = await this.cotizacionRepository.findOneBy({ id });
    if (!cotizacion) {
      throw new Error('Cotización no encontrada');
    }
    await this.cotizacionRepository.remove(cotizacion);
    return { ...cotizacion, id };
  }
}
