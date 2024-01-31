import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToMany,
} from "typeorm";
import { Player } from "./player";
export enum TrainerStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
@Entity()
export class Trainer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  name: String;

  @Column({ type: "int" })
  exp: number;

  @Column({ type: "smallint" })
  age: number;

  @Column({ type: "enum", enum: TrainerStatus, default: TrainerStatus.ACTIVE })
  status: TrainerStatus;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  upDateAt: Date;

  @ManyToMany(() => Player, (player) => player.trainers)
  players: Player[];
}
