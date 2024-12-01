import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Paquete } from '../../Paquete/entities/paquete.entity';

@Entity()
export class Seguimiento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  descripcion: string;

  @Column({ type: 'varchar', default: () => 'CURRENT_TIMESTAMP' })
  fechaRegistro: string;

  @Column({ type: 'varchar', nullable: true })
  fechaUltimaActualizacion: string;

  @ManyToOne(() => Paquete, (paquete) => paquete.idPaquete, { eager: true })
  @JoinColumn({ name: 'paqueteId' })
  paquete: Paquete;
}