import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paquete } from './entities/paquete.entity';
import { PaqueteService } from './paquete.service';
import { PaqueteResolver } from './paquete.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Paquete])], 
  providers: [PaqueteService, PaqueteResolver],
  exports: [PaqueteService], 
})
export class PaqueteModule {}