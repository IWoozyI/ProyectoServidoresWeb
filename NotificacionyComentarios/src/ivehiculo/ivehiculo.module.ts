import { Module } from '@nestjs/common';
import { IvehiculoController } from './ivehiculo.controller';
import { IvehiculoService } from './ivehiculo.service';

@Module({
  controllers: [IvehiculoController],
  providers: [IvehiculoService]
})
export class IvehiculoModule {}
