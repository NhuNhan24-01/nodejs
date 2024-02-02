import { Column, Entity, OneToMany } from "typeorm";
import { AbstractIdTimeEntity } from "./base-entity";
import { Pet } from "./pet";
export enum OwnerStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
@Entity()
export class Owner extends AbstractIdTimeEntity {
  @Column({ type: "varchar" })
  name: String;

  @Column({ type: "varchar" })
  address: String;

  @Column({ type: "int" })
  age: number;

  @Column({ type: "int" })
  phoneNumber: number;

  @Column({ type: "enum", enum: OwnerStatus, default: OwnerStatus.ACTIVE })
  status: OwnerStatus;

  @OneToMany(() => Pet, (pet) => pet.owners)
  pets: Pet[];
}
