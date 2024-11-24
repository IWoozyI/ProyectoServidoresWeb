import { Injectable } from '@nestjs/common';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository:Repository<Usuario>
  ){}

  async create(createUsuarioInput: CreateUsuarioInput):Promise<Usuario> {
    const nuevo= this.usuarioRepository.create(createUsuarioInput)
    return await this.usuarioRepository.save(nuevo);
  }

  async findAll():Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async findOne(id: string):Promise<Usuario> {
    return await this.usuarioRepository.findOneBy({id});
  }

  async update(id: string, updateUsuarioInput: UpdateUsuarioInput):Promise<Usuario> {
    const actualizar=await this.usuarioRepository.preload(updateUsuarioInput)
    if (!actualizar) {
      throw new Error ("Usuario no encontrado")
    }
    return await this.usuarioRepository.save(actualizar);
  }

  async remove(id: string):Promise<Usuario> {
    const borrar=await this.usuarioRepository.findOne({where:{id}})
    if (!borrar) {
      throw new Error ("Usuario no encontrado")
    }
    await this.usuarioRepository.remove(borrar);
    return {...borrar, id}
  }
}
