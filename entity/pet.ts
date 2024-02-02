import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AbstractIdTimeEntity } from "./base-entity";
import { Owner } from "./owner";
import { Skincare } from "./skincare";
export enum PetStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
@Entity()
export class Pet extends AbstractIdTimeEntity {
  @Column({ type: "int", nullable: true })
  ownerId: number;

  @Column({ type: "int", nullable: true })
  skincareId: number;

  @Column({ type: "varchar" })
  name: String;

  @Column({ type: "varchar" })
  color: String;

  @Column({ type: "float" })
  weight: number;

  @Column({ type: "enum", enum: PetStatus, default: PetStatus.ACTIVE })
  status: PetStatus;

  @ManyToOne(() => Owner, (owner) => owner.pets)
  @JoinColumn({ name: "ownerId" })
  owners: Owner;

  @ManyToOne(() => Skincare, (skincare) => skincare.pets)
  @JoinColumn({ name: "skincareId" })
  skincares: Skincare;
}
