import { Column, Entity, ManyToMany } from "typeorm";
import { AbstractIdTimeEntity } from "./base-entity";
import { Player } from "./player";
export enum TrainerStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
@Entity()
export class Trainer extends AbstractIdTimeEntity {
  @Column({ type: "varchar" })
  name: String;

  @Column({ type: "int" })
  exp: number;

  @Column({ type: "smallint" })
  age: number;

  @Column({ type: "enum", enum: TrainerStatus, default: TrainerStatus.ACTIVE })
  status: TrainerStatus;

  @ManyToMany(() => Player, (player) => player.trainers)
  players: Player[];
}
