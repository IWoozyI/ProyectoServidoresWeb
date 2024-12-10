import { Module } from '@nestjs/common';
import { CotizacionService } from './cotizaciones.service';
import { CotizacionResolver } from './cotizaciones.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cotizacion } from './entities/cotizaciones.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cotizacion])],
  providers: [CotizacionResolver, CotizacionService],
  exports: [TypeOrmModule],
})
export class CotizacionModule {}
