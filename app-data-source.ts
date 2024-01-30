import { Club } from "./entity/club"
import { Player } from "./entity/player"
import { DataSource } from "typeorm"
export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5436,
    username: "postgres",
    password: "123456",
    database: "vietcom_db",
    entities: [Club,Player],
    logging: false,
    synchronize: true,
})