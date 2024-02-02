import { Column, Entity, OneToMany } from "typeorm";
import { AbstractIdTimeEntity } from "./base-entity";
import { Pet } from "./pet";
export enum SkincareStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
@Entity()
export class Skincare extends AbstractIdTimeEntity {
  @Column({ type: "varchar" })
  name: String;

  @Column({
    type: "enum",
    enum: SkincareStatus,
    default: SkincareStatus.ACTIVE,
  })
  status: SkincareStatus;

  @OneToMany(() => Pet, (pet) => pet.skincares)
  pets: Pet;
}
