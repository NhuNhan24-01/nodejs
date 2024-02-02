import { Column, Entity, OneToMany } from "typeorm";
import { Player } from "../entity/player";
import { AbstractIdTimeEntity } from "./base-entity";

export enum ClubStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
@Entity()
export class Club extends AbstractIdTimeEntity {
  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  num: string;

  @Column({ type: "smallint" })
  age: number;

  @Column({ type: "enum", enum: ClubStatus, default: ClubStatus.ACTIVE })
  status: ClubStatus;

  @OneToMany(() => Player, (player) => player.clubs)
  players: Player[];
}
