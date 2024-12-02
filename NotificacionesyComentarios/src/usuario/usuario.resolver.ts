// import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
// import { UsuarioService } from './usuario.service';
// import { Usuario } from './entities/usuario.entity';
// import { CreateUsuarioInput } from './dto/create-usuario.input';
// import { UpdateUsuarioInput } from './dto/update-usuario.input';

// @Resolver(() => Usuario)
// export class UsuarioResolver {
//   constructor(private readonly usuarioService: UsuarioService) {}

//   @Mutation(() => Usuario)
//   createUsuario(@Args('createUsuarioInput') createUsuarioInput: CreateUsuarioInput):Promise<Usuario> {
//     return this.usuarioService.create(createUsuarioInput);
//   }

//   @Query(() => [Usuario], { name: 'usuarios' })
//   findAll():Promise<Usuario[]> {
//     return this.usuarioService.findAll();
//   }

//   @Query(() => Usuario, { name: 'usuario' })
//   findOne(@Args('id', { type: () => String }) id: string):Promise<Usuario> {
//     return this.usuarioService.findOne(id);
//   }

//   @Mutation(() => Usuario)
//   updateUsuario(@Args('updateUsuarioInput') updateUsuarioInput: UpdateUsuarioInput):Promise<Usuario> {
//     return this.usuarioService.update(updateUsuarioInput.id, updateUsuarioInput);
//   }

//   @Mutation(() => Usuario)
//   removeUsuario(@Args('id', { type: () => String }) id: string):Promise<Usuario> {
//     return this.usuarioService.remove(id);
//   }
// }

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
import { UsuarioGateway } from './usuario.gateway'; // Importa el gateway

@Resolver(() => Usuario)
export class UsuarioResolver {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly usuarioGateway: UsuarioGateway, // Inyecta el gateway
  ) {}

  @Mutation(() => Usuario)
  async createUsuario(
    @Args('createUsuarioInput') createUsuarioInput: CreateUsuarioInput,
  ): Promise<Usuario> {
    const newUser = await this.usuarioService.create(createUsuarioInput);

    // Emitir el evento 'usuarioCreated' a través del gateway
    this.usuarioGateway.notifyUsuarioChanges('usuarioCreated', newUser);

    return newUser;
  }

  @Query(() => [Usuario], { name: 'usuarios' })
  findAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @Query(() => Usuario, { name: 'usuario' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Usuario> {
    return this.usuarioService.findOne(id);
  }

  @Mutation(() => Usuario)
  async updateUsuario(
    @Args('updateUsuarioInput') updateUsuarioInput: UpdateUsuarioInput,
  ): Promise<Usuario> {
    const updatedUser = await this.usuarioService.update(
      updateUsuarioInput.id,
      updateUsuarioInput,
    );

    // Emitir el evento 'usuarioUpdated' a través del gateway
    this.usuarioGateway.notifyUsuarioChanges('usuarioUpdated', updatedUser);

    return updatedUser;
  }

  @Mutation(() => Usuario)
  async removeUsuario(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Usuario> {
    const deletedUser = await this.usuarioService.remove(id);

    // Emitir el evento 'usuarioDeleted' a través del gateway
    this.usuarioGateway.notifyUsuarioChanges('usuarioDeleted', { id });

    return deletedUser;
  }
}
