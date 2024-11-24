import { Injectable } from '@nestjs/common';
import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';
import { Cliente } from './entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {

  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepositorio:Repository<Cliente>
  ){}

  async create(createClienteInput: CreateClienteInput): Promise<Cliente> {
    const crear= this.clienteRepositorio.create(createClienteInput);
    return await this.clienteRepositorio.save(crear);
    
  }

  async findAll(): Promise<Cliente[]> {
    return await this.clienteRepositorio.find();
  }

  async findOne(id: string): Promise<Cliente> {
    return await this.clienteRepositorio.findOneBy({id});
  }

  async update(id: string, updateClienteInput: UpdateClienteInput): Promise<Cliente> {
    const cambio= await this.clienteRepositorio.preload(updateClienteInput);
    if (!cambio) {
      throw new Error ("Cliente no encontrado")
    }
    return await this.clienteRepositorio.save(cambio);
  }

  async remove(id: string): Promise<Cliente> {
    const remover= await this.clienteRepositorio.findOne({where:{id}});
    if (!remover) {
      throw new Error ("Cliente no encontrado")
    }
    await this.clienteRepositorio.remove(remover);
    return {...remover,id};
  }
}
