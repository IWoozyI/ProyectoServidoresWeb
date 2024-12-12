import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Reserva } from 'src/reserva/entities/reserva.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:'cliente'})
export class Cliente {

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id:string

  @Column()
  @Field(() => String)
  nombre:string

  @Column()
  @Field(() => String)
  email:string

  @Field(() => [Reserva])
  @OneToMany(()=> Reserva, (reserva) =>reserva.cliente)
  reservas: Reserva[]
}
