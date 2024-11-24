import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteResolver } from './cliente.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';

@Module({
  providers: [ClienteResolver, ClienteService],
  imports:[TypeOrmModule.forFeature([Cliente])],
  exports:[TypeOrmModule]
})
export class ClienteModule {}
