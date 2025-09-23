import * as SQLite from "expo-sqlite";

let db: SQLite.SQLiteDatabase | null = null;

const db_name = "kitchen"

export async function getDB(){
    if(!db){
        db = await SQLite.openDatabaseAsync(db_name);
    }else
    return db;
}


/*console.log("Opening database");
const db = await SQLite.openDatabaseAsync("kitchen");

await db.execAsync(`    
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS recipe_info
    (
        recipe_id INTEGER PRIMARY KEY NOT NULL,
        recipe_name TEXT NOT NULL,
        recipe_time INTEGER NOT NULL,
        recipe_mastery INTEGER NOT NULL,
        recipe_quantity INTEGER NOT NULL,
        recipe_steps TEXT NOT NULL

    );
`);

const result = await db.runAsync(`INSERT INTO recipe_info(recipe_name, recipe_time, recipe_mastery, recipe_quantity, recipe_steps) 
    VALUES('Sandwich', 5, 10, 1, 'Just make a sandwich')`);

export default db;*/