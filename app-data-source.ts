import { Trainer } from "./entity/trainer";
import { Club } from "./entity/club";
import { Player } from "./entity/player";
import { DataSource } from "typeorm";
import { Shoe } from "./entity/shoe";
import { Owner } from "./entity/owner";
import { Pet } from "./entity/pet";
import { Skincare } from "./entity/skincare";
export const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5436,
  username: "postgres",
  password: "123456",
  database: "vietcom_db",
  entities: [Club, Player, Trainer, Shoe, Owner, Pet, Skincare],
  logging: false,
  synchronize: true,
});
