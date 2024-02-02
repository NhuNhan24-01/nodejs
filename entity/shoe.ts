import { Column, Entity, OneToOne } from "typeorm";
import { AbstractIdTimeEntity } from "./base-entity";
import { Player } from "./player";
export enum ShoeStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
@Entity()
export class Shoe extends AbstractIdTimeEntity {
  @Column({ type: "varchar" })
  name: String;

  @Column({ type: "int" })
  size: number;

  @Column({ type: "float" })
  price: number;

  @Column({ type: "enum", enum: ShoeStatus, default: ShoeStatus.ACTIVE })
  status: ShoeStatus;

  @OneToOne(() => Player, (player) => player.shoes)
  players: Player;
}
