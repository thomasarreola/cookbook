
const VALID_TABLES = ['recipe_list', 'stock_list', 'ingredient_list'];

//How this works is that it uploads the recipe into the table and then refreshes the current page
export const addRecipe = async (db,newRecipe) => {
    try{
        const statement = await db.prepareAsync(`INSERT INTO recipe_list (name, mastery) VALUES(?,?)`);
        const result = await statement.executeAsync([newRecipe.name, newRecipe.mastery]);
        const recipeId = result.lastInsertRowId;
        for(let i = 0; i < newRecipe.ingredients.length; i++){
            await addStock(db, {name: newRecipe.ingredients[i][0], quantity: 0});
        }
        return recipeId;
    }catch(error){
        console.log("Error while adding recipe", error);
    }
}

//checks if stock is already in the stock list, and if it isn't creates another stock entry, but if it is just adds to it.
export const addStock = async (db, newStock) => {
    try{
        const stockId = await checkStock(db, newStock);
        if(!stockId){
            const statement = await db.prepareAsync(`INSERT INTO stock_list (name, quantity) VALUES(?,?)`);
            const result = await statement.executeAsync([newStock.name, newStock.quantity]);
            return result.lastInsertRowId;
        }else{
            const statement = await db.prepareAsync(`UPDATE stock_list SET quantity = quantity+? WHERE id=?`);
            await statement.executeAsync([newStock.quantity, stockId]);
            return stockId;
        }
    }catch(error){
        console.log("Error while adding stock", error);
    }
}

//checks if stock exist, if it does returns stock id, but if it isn't returns false, is only meant to be really used by addStock
export const checkStock = async(db, newStock) =>{
    try{
        const result = await db.getFirstAsync(`SELECT id FROM stock_list WHERE name=?`,[newStock.name]);
        if(!result){
            return false;
        }
        return result.id;
    }catch(error){
        console.log("Error checking stock", error);
    }
}

export const addIngredient = async (db, newIngredient) => {
    try{
        const statement = await db.prepareAsync(`INSERT INTO ingredient_list (name)`)
    }catch(error){
        console.log("Error while adding ingredient", error);
    }
}

/*
1. Adds recipe to the recipe_list table
2. Retrieves recipe_id
3. Checks if each ingredient has an entry in the stock_list table and if it doesn't creates one with quanity of 0
3. Retrieves stock_id
4. Creates entry each of each ingredient in the list with connecting stock_id and recipe_id

export const integrateRecipe = async (db, newRecipe) =>{
    try{
        const recipe_id = addRecipe(db, newRecipe);
        //loops through the list of ingredients checking if each type of ingredient has an entry in stock_list
        for(let i = 0; i < newRecipe.ingredients.length; i++){
            let stock_id = await db.getFirstAsync(`SELECT stock_id FROM stock_list WHERE name=${newRecipe.ingredients[i]}`);
            if(!stock_id){
                stock_id = addStock(db, {name: newRecipe.ingredients[i], quantity: "0"});
            }

        }

        return check;
    }catch(error){
        console.log("Error while checking entry", error);
    }
}
*/

export const wipeTable = async (db, tableName) => {
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

export const accessEntryBy = async (db, tableName, id) => {
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


//Deletes any entry in any table by passing the database, table name, and ID of thing you want to delete
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