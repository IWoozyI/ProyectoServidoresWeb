import { Module } from '@nestjs/common';
import { SeguimientoService } from './seguimiento.service';
import { SeguimientoGateway } from './seguimiento.gateway';
import { Seguimiento } from './entities/seguimiento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Seguimiento])],
  providers: [SeguimientoService, SeguimientoGateway],
  exports: [SeguimientoService],
})
export class SeguimientoModule {}