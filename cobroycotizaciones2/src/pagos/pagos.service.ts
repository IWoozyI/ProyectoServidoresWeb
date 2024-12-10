import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePagoInput } from './dto/create-pago.input';
import { UpdatePagoInput } from './dto/update-pago.input';
import { Pago } from './entities/pagos.entity';

@Injectable()
export class PagoService {
  constructor(
    @InjectRepository(Pago)
    private readonly pagoRepository: Repository<Pago>,
  ) {}

  async create(createPagoInput: CreatePagoInput): Promise<Pago> {
    const nuevoPago = this.pagoRepository.create(createPagoInput);
    return await this.pagoRepository.save(nuevoPago);
  }

  async findAll(): Promise<Pago[]> {
    return await this.pagoRepository.find();
  }

  async findOne(id: string): Promise<Pago> {
    const pago = await this.pagoRepository.findOneBy({ id });
    if (!pago) {
      throw new Error('Pago no encontrado');
    }
    return pago;
  }

  async update(id: string, updatePagoInput: UpdatePagoInput): Promise<Pago> {
    const pago = await this.pagoRepository.preload(updatePagoInput);
    if (!pago) {
      throw new Error('Pago no encontrado');
    }
    return await this.pagoRepository.save(pago);
  }

  async remove(id: string): Promise<Pago> {
    const pago = await this.pagoRepository.findOneBy({ id });
    if (!pago) {
      throw new Error('Pago no encontrado');
    }
    await this.pagoRepository.remove(pago);
    return { ...pago, id };
  }
}
