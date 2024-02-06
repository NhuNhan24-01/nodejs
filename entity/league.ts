import { Column, Entity, OneToMany } from "typeorm";
import { AbstractIdTimeEntity } from "./base-entity";
import { Team } from "./team";

@Entity()
export class League extends AbstractIdTimeEntity {
  @Column({ type: "varchar" })
  name: String;

  @Column({ type: "varchar" })
  country: String;

  @Column({ type: "int" })
  founded: Number;
  @OneToMany(() => Team, (team) => team.league)
  team: Team[];
}
