import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Paquete } from 'src/paquete/entities/paquete.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:'reserva'})
export class Reserva {

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id:string

  @Column()
  @Field(() => String)
  fechareserva:string

  @Column()
  @Field(() => String)
  ID_Cliente: string

  @ManyToOne(() => Cliente, (cliente) => cliente.reservas, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ID_Cliente' })
  @Field(() => Cliente)
  cliente: Cliente;

  @Column()
  @Field(()=> String)
  ID_Paquete: string

  @ManyToOne(() => Paquete, (paquete) => paquete.reservas, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ID_Paquete' })
  @Field(() => Paquete)
  paquete: Paquete;

}
