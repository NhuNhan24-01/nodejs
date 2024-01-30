import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

export enum ClubStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}
@Entity()
export class Club extends BaseEntity {
  @PrimaryGeneratedColumn({type : 'int'})
  id: number;

  @Column({ type: 'varchar'})
  name: string;

  @Column({ type: 'varchar' })
  numPlayer: string;

  @Column({ type: 'smallint' })
  age: number;

  @Column({ type: 'enum', enum: ClubStatus, default: ClubStatus.ACTIVE })
  status: ClubStatus;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
