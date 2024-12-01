import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actividad } from './entities/actividad.entity';
import { ActividadService } from './actividad.service';
import { ActividadResolver } from './actividad.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Actividad])], 
  providers: [ActividadService, ActividadResolver], 
  exports: [ActividadService], 
})
export class ActividadModule {}