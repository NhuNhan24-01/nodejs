import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AbstractIdTimeEntity } from "./base-entity";
import { Team } from "./team";

@Entity()
export class Match extends AbstractIdTimeEntity {
  @Column({ type: "int", nullable: true })
  homeTeamId: Number;

  @Column({ type: "int", nullable: true })
  awayTeamId: Number;

  @Column({ type: "varchar" })
  homeGoal: String;

  @Column({ type: "varchar" })
  awayGoal: String;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "varchar" })
  venue: String;

  @ManyToOne(() => Team, (team) => team.homeMatchs)
  @JoinColumn({ name: "homeTeamId" })
  homeTeams: Team[];

  @ManyToOne(() => Team, (team) => team.awayMatchs)
  @JoinColumn({ name: "awayTeamId" })
  awayTeams: Team[];
}
