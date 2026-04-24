import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity('TYPEPRIORITY')
export class TypePriority {
  @PrimaryGeneratedColumn({ name: 'TYPEPRI_ID' })
  Id!: number;
 
  @Column({ name: 'TYPEPRI_DESCRIPTION', type: 'text', nullable: false })
  typepriDescription!: string;
}
