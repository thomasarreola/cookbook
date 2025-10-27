
const VALID_TABLES = ['recipe_list', 'stock_list', 'ingredient_list'];

//How this works is that it uploads the recipe into the table and then refreshes the current page
export const addRecipe = async (newRecipe, db, tableName) => {
    try{
        if(!VALID_TABLES.includes(tableName)){
            console.log("Invalid table name");
            return;
        }
        const statement = await db.prepareAsync(`INSERT INTO ${tableName} (name, mastery) VALUES(?,?)`);
        await statement.executeAsync([newRecipe.name, newRecipe.mastery]);
    }catch(error){
        console.log("Error while adding recipe", error);
    }
}

export const addStock = async (newStock, db, tableName) => {
    try{
        if(!VALID_TABLES.includes(tableName)){
            console.log("Invalid table name");
            return;
        }
        const statement = await db.prepareAsync(`INSERT INTO ${tableName} (name) VALUES(?)`);
        await statement.executeAsync([newStock.name]);
    }catch(error){
        console.log("Error while adding stock", error);
    }
}

export const deleteAllEntries = async (db, tableName) => {
    try{
        if(!VALID_TABLES.includes(tableName)){
            console.log("Invalid table name");
            return;
        }
        await db.runAsync(`DELETE FROM ${tableName}`);
    }catch(error){
      console.log("Error deleting everything", error);
    }
}

export const accessEntry = async (db, tableName, id) => {
    try{
        if(!VALID_TABLES.includes(tableName)){
            console.log("Invalid table name");
            return;
        }
        const entry = await db.getFirstAsync(`SELECT * FROM ${tableName} WHERE id=${id}`);
        return entry;
    }catch(error){
        console.log("Error fetching entry", error);
    }
}

export const removeEntry = async (db, tableName, id) => {
    try{
        if(!VALID_TABLES.includes(tableName)){
            console.log("Invalid table name");
            return;
        }
        await db.runAsync(`DELETE From ${tableName} WHERE id=${id}`);
    }catch(error){
        console.log("Error removing entry", error);
    }
}