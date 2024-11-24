import { Injectable } from '@nestjs/common';
import { CreatePublicacionInput } from './dto/create-publicacion.input';
import { UpdatePublicacionInput } from './dto/update-publicacion.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Publicacion } from './entities/publicacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PublicacionService {

  constructor(
    @InjectRepository(Publicacion)
    private readonly publicacionRepository:Repository<Publicacion>
  ){}

  async create(createPublicacionInput: CreatePublicacionInput): Promise<Publicacion> {
    const nuevo= this.publicacionRepository.create(createPublicacionInput)
    return await this.publicacionRepository.save(nuevo);
  }

  async findAll(): Promise<Publicacion[]> {
    return await this.publicacionRepository.find();
  }

  async findOne(id: string): Promise<Publicacion> {
    return await this.publicacionRepository.findOneBy({id});
  }

  async update(id: string, updatePublicacionInput: UpdatePublicacionInput): Promise<Publicacion> {
    const actualizar=await this.publicacionRepository.preload(updatePublicacionInput)
    if (!actualizar) {
      throw new Error ("Usuario no encontrado")
    }
    return await this.publicacionRepository.save(actualizar);
  }

  async remove(id: string): Promise<Publicacion> {
    const borrar=await this.publicacionRepository.findOne({where:{id}})
    if (!borrar) {
      throw new Error ("Usuario no encontrado")
    }
    await this.publicacionRepository.remove(borrar);
    return {...borrar, id}
  }
}
