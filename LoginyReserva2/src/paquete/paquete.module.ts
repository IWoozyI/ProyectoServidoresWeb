import { Module } from '@nestjs/common';
import { PaqueteService } from './paquete.service';
import { PaqueteResolver } from './paquete.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paquete } from './entities/paquete.entity';

@Module({
  providers: [PaqueteResolver, PaqueteService],
  imports:[TypeOrmModule.forFeature([Paquete])],
  exports:[TypeOrmModule]
})
export class PaqueteModule {}
