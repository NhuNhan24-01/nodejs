import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Club } from "../entity/club";
import { AbstractIdTimeEntity } from "./base-entity";
import { Trainer } from "./trainer";
import { Shoe } from "./shoe";

export enum PlayerStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
@Entity()
export class Player extends AbstractIdTimeEntity {
  @Column({ type: "int", nullable: true })
  clubId: number;

  @Column({ type: "int", nullable: true })
  shoeId: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  num: string;

  @Column({ type: "smallint" })
  age: number;

  @Column({ type: "enum", enum: PlayerStatus, default: PlayerStatus.ACTIVE })
  status: PlayerStatus;

  @ManyToOne(() => Club, (club) => club.players)
  @JoinColumn({ name: "clubId" })
  clubs: Club;

  @ManyToMany(() => Trainer, (trainer) => trainer.players)
  @JoinTable({
    name: "player-trainer",
    joinColumn: {
      name: "player",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "trainer",
      referencedColumnName: "id",
    },
  })
  trainers: Trainer[];
  @OneToOne(() => Shoe, (shoe) => shoe.players)
  @JoinColumn({ name: "shoeId" })
  shoes: Shoe;
}
