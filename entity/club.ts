import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Player } from "../entity/player";

export enum ClubStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
@Entity()
export class Club extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar" })
  nameClub: string;

  @Column({ type: "varchar" })
  numClub: string;

  @Column({ type: "smallint" })
  age: number;

  @Column({ type: "enum", enum: ClubStatus, default: ClubStatus.ACTIVE })
  status: ClubStatus;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;
  player: any;
  @OneToMany(() => Player, (player) => player.clubs)
  players: Player[];
}
