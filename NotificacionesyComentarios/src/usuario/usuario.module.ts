import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioResolver } from './usuario.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuarioGateway } from './usuario.gateway';

@Module({
  providers: [UsuarioResolver, UsuarioService, UsuarioGateway],
  imports:[TypeOrmModule.forFeature([Usuario])],
  exports:[TypeOrmModule]
})
export class UsuarioModule {}
