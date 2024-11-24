import { Module } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { ReservaResolver } from './reserva.resolver';
import { Reserva } from './entities/reserva.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ReservaResolver, ReservaService],
  imports:[TypeOrmModule.forFeature([Reserva])],
  exports:[TypeOrmModule]
})
export class ReservaModule {}
