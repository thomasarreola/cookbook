import * as SQLite from "expo-sqlite";

console.log("Opening database");
const db = SQLite.openDatabaseAsync("kitchen.db");

export default db;