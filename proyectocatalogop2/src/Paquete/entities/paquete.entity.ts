import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Actividad } from '../../Actividades/entities/actividad.entity';

@Entity()
export class Paquete {
  @PrimaryGeneratedColumn()
  idPaquete: number;

  @Column()
  nombrePaquete: string;

  @Column()
  descripcionPaquete: string;

  @Column('decimal')
  precioTotal: number;

  @Column('int')
  duracionTotal: number;

  @Column('date')
  fechaInicio: string;

  @Column('date')
  fechaFin: string;

  @Column('int')
  cupo: number;

  @Column()
  ubicacion: string;

  @Column()
  categoria: string;

  @ManyToMany(() => Actividad, (actividad) => actividad.paquetes, { cascade: true })
  @JoinTable() // Define la tabla intermedia para la relación
  actividades: Actividad[];
}