import { Module } from '@nestjs/common';
import { PagoService } from './pagos.service';
import { PagoResolver } from './pagos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pago } from './entities/pagos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pago])],
  providers: [PagoResolver, PagoService],
  exports: [TypeOrmModule],
})
export class PagoModule {}
