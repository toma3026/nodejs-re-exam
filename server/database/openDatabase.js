import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const databasePath = "./database/app.db";

export async function openDatabase() {
  return open({
    filename: databasePath,
    driver: sqlite3.Database
  })
}
