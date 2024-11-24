import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';

@Resolver(() => Usuario)
export class UsuarioResolver {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Mutation(() => Usuario)
  createUsuario(@Args('createUsuarioInput') createUsuarioInput: CreateUsuarioInput):Promise<Usuario> {
    return this.usuarioService.create(createUsuarioInput);
  }

  @Query(() => [Usuario], { name: 'usuarios' })
  findAll():Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @Query(() => Usuario, { name: 'usuario' })
  findOne(@Args('id', { type: () => String }) id: string):Promise<Usuario> {
    return this.usuarioService.findOne(id);
  }

  @Mutation(() => Usuario)
  updateUsuario(@Args('updateUsuarioInput') updateUsuarioInput: UpdateUsuarioInput):Promise<Usuario> {
    return this.usuarioService.update(updateUsuarioInput.id, updateUsuarioInput);
  }

  @Mutation(() => Usuario)
  removeUsuario(@Args('id', { type: () => String }) id: string):Promise<Usuario> {
    return this.usuarioService.remove(id);
  }
}
