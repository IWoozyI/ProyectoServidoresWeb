import { Module } from '@nestjs/common';
import { PublicacionService } from './publicacion.service';
import { PublicacionResolver } from './publicacion.resolver';
import { Publicacion } from './entities/publicacion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [PublicacionResolver, PublicacionService],
  imports:[TypeOrmModule.forFeature([Publicacion])],
  exports:[TypeOrmModule]
})
export class PublicacionModule {}
