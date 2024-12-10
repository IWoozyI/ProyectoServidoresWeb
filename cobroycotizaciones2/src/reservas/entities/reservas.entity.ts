import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:'reservas'})
export class Reserva {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  cliente: string;

  @Field(() => String)
  @Column()
  descripcion: string;

  @Field(() => Date)
  @Column({ type: 'timestamp' })
  fechaReserva: Date;

  @Field(() => Number)
  @Column('decimal')
  monto: number;

  @Field(() => String)
  @Column()
  estado: string;
}
