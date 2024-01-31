import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Club } from "../entity/club";

export enum PlayerStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
@Entity()
export class Player extends BaseEntity {
  [x: string]: any;
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "int", nullable: true })
  clubId: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  numPlayer: string;

  @Column({ type: "smallint" })
  age: number;

  @Column({ type: "enum", enum: PlayerStatus, default: PlayerStatus.ACTIVE })
  status: PlayerStatus;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;
  @ManyToOne(() => Club, (club) => club.players)
  @JoinColumn({ name: "clubId" })
  clubs: Club;
}
