import knex from "knex";
import _config from "../../knexfile";

const config = _config[process.env.NODE_ENV || "development"];

let connection;

export function db() {
  if (typeof connection === "undefined") {
    connection = knex(config);
  }
  return connection;
}
