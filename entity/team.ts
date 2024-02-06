import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AbstractIdTimeEntity } from "./base-entity";
import { League } from "./league";
import { Match } from "./match";

@Entity()
export class Team extends AbstractIdTimeEntity {
  @Column({ type: "int" })
  leagueId: Number;

  @Column({ type: "varchar" })
  name: String;

  @Column({ type: "varchar" })
  city: String;

  @Column({ type: "varchar" })
  stadium: String;

  @Column({ type: "int" })
  founded: Number;
  @ManyToOne(() => League, (League) => League.team)
  // @JoinColumn({ name: "LeagueId" })
  league: League[];
  @OneToMany(() => Match, (match) => match.awayTeam)
  homeMatch: Match[];
  @OneToMany(() => Match, (match) => match.homeTeam)
  awayMatch: Match[];
}
