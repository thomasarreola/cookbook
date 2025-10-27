export async function initDatabase(db){
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

    try {
      await db.execAsync(`    
          PRAGMA journal_mode = WAL;
          CREATE TABLE IF NOT EXISTS stock_list 
          (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT
          );
      `);
      console.log("Created stock list successfully");
    } catch (error) {
      console.log("Error creating stock list ", error);
    }

    try {
      await db.execAsync(`    
          PRAGMA journal_mode = WAL;
          CREATE TABLE IF NOT EXISTS ingredient_list 
          (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT
          );
      `);
      console.log("Created ingredient list successfully");
    } catch (error) {
      console.log("Error creating ingredient list database ", error);
    }
}