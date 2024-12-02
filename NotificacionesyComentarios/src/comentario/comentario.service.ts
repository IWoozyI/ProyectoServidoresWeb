import { Injectable } from '@nestjs/common';
import { CreateComentarioInput } from './dto/create-comentario.input';
import { UpdateComentarioInput } from './dto/update-comentario.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Comentario } from './entities/comentario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComentarioService {

  constructor(
    @InjectRepository(Comentario)
    private readonly comentarioRepository:Repository<Comentario>
  ){}

  async create(createComentarioInput: CreateComentarioInput): Promise<Comentario> {
    const nuevo= this.comentarioRepository.create(createComentarioInput)
    return await this.comentarioRepository.save(nuevo);
  }

  async findAll(): Promise<Comentario[]> {
    return await this.comentarioRepository.find();
  }

  async findOne(id: string): Promise<Comentario> {
    return await this.comentarioRepository.findOneBy({id});
  }

  async update(id: string, updateComentarioInput: UpdateComentarioInput): Promise<Comentario> {
    const actualizar=await this.comentarioRepository.preload(updateComentarioInput)
    if (!actualizar) {
      throw new Error ("Usuario no encontrado")
    }
    return await this.comentarioRepository.save(actualizar);
  }

  async remove(id: string): Promise<Comentario> {
    const borrar=await this.comentarioRepository.findOne({where:{id}})
    if (!borrar) {
      throw new Error ("Usuario no encontrado")
    }
    await this.comentarioRepository.remove(borrar);
    return {...borrar, id}
  }
}
