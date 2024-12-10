import { Module } from '@nestjs/common';
import { ReservaService } from './reservas.service';
import { ReservaResolver } from './reservas.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from './entities/reservas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva])],
  providers: [ReservaResolver, ReservaService],
  exports: [TypeOrmModule],
})
export class ReservaModule {}
