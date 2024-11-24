import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Paquete } from '../../Paquete/entities/paquete.entity';

@Entity()
export class Actividad {
  @PrimaryGeneratedColumn()
  idActividad: number;

  @Column()
  nombreActividad: string;

  @Column()
  descripcionActividad: string;

  @Column('string')
  fecha: string;

  @Column()
  lugar: string;

  @Column()
  categoria: string;

  @ManyToMany(() => Paquete, (paquete) => paquete.actividades)
  paquetes: Paquete[];
}