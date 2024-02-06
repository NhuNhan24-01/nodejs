import { Column, Entity, ManyToOne } from "typeorm";
import { AbstractIdTimeEntity } from "./base-entity";
import { Team } from "./team";

@Entity()
export class Match extends AbstractIdTimeEntity {
  @Column({ type: "varchar" })
  homeGoal: String;

  @Column({ type: "varchar" })
  awayGoal: String;

  @Column({ type: "date" })
  Date: Date;

  @Column({ type: "varchar" })
  venue: String;

  @ManyToOne(() => Team, (team) => team.homeMatch)
  homeTeam: Team[];
  @ManyToOne(() => Team, (team) => team.awayMatch)
  awayTeam: Team[];
}
