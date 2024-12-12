import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:'cotizaciones'})
export class Cotizacion {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  cliente: string;

  @Field(() => String)
  @Column()
  descripcion: string;

  @Field(() => Number)
  @Column('decimal')
  monto: number;

  @Field(() => Date)
  @Column({ type: 'timestamp' })
  fecha: Date;
}