import knex from "knex"

export default knex({
  client: 'better-sqlite3', // or 'better-sqlite3'
  connection: {
    filename: "./learnbase.db"
  }
});