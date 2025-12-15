export async function initDatabase(db){

  /*
  1. The reason why a lot of these tables have similar column names is to make it easier to reuse the same functions
  */

  //I want to use this whenever I want to add new types to my SQLite tables
  try{
    //ALTER TABLE stock_list ADD COLUMN quantity TEXT;
    //ALTER TABLE recipe_list RENAME recipe_id TO id;
    //DROP TABLE IF EXISTS ingredient_list;
    /*await db.execAsync(`
      DROP TABLE IF EXISTS ingredient_list;
      DROP TABLE IF EXISTS recipe_list;
      DROP TABLE IF EXISTS stock_list;
    `);*/
  }catch(error){
    console.log("Error altering table", error);
  }
  //initializes recipe table  
  try {
        await db.execAsync(`    
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS recipe_list 
            (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                mastery INTEGER
            );
        `);
        console.log("Created recipe list successfully");
    } catch (error) {
    console.log("Error creating recipe list ", error);
  }

  //initialized stock table
  try {
    await db.execAsync(`    
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS stock_list 
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            quantity INTEGER
        );
      `);
      console.log("Created stock list successfully");
    } catch (error) {
      console.log("Error creating stock list ", error);
    }
    //initializes ingredient table
    try {
      await db.execAsync(`    
          PRAGMA journal_mode = WAL;
          PRAGMA foreign_keys = ON;
          CREATE TABLE IF NOT EXISTS ingredient_list 
          (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              quantity INTEGER,
              recipe_id INTEGER,
              stock_id INTEGER,
              FOREIGN KEY (recipe_id) REFERENCES recipe_list(id) ON DELETE CASCADE,
              FOREIGN KEY (stock_id) REFERENCES stock_list(id) ON DELETE CASCADE
          );
      `);
      console.log("Created ingredient list successfully");
    } catch (error) {
      console.log("Error creating ingredient list database ", error);
    }
}