import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Reserva } from 'src/reserva/entities/reserva.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:'paquete'})
export class Paquete {

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id:string

  @Column()
  @Field(() => String)
  descripcion:string

  @Column()
  @Field(() => String)
  precio:string

  @Field(() => [Reserva])
  @OneToMany(()=> Reserva, (reserva) =>reserva.paquete)
  reservas: Reserva[]
}
