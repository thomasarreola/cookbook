
const VALID_TABLES = ['recipe_list', 'stock_list', 'ingredient_list'];

//How this works is that it uploads the recipe into the table and then refreshes the current page
export const addRecipe = async (db,newRecipe) => {
    try{
        const statement = await db.prepareAsync(`INSERT INTO recipe_list (name, mastery) VALUES(?,?)`);
        const recipeResult = await statement.executeAsync([newRecipe.name, newRecipe.mastery]);
        const recipeId = recipeResult.lastInsertRowId;
        for(let i = 0; i < newRecipe.ingredients.length; i++){
            const stockId = await addStock(db, {name: newRecipe.ingredients[i][0], quantity: 0});
            await addIngredient(db, {quantity: newRecipe.ingredients[i][1], recipe_id: recipeId, stock_id: stockId})
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

//adds that a recipe has an ingredient to a list
export const addIngredient = async (db, newIngredient) => {
    try{
        const statement = await db.prepareAsync(`INSERT INTO ingredient_list (quantity, recipe_id, stock_id) VALUES (?,?,?)`)
        const result = await statement.executeAsync([newIngredient.quantity, newIngredient.recipe_id, newIngredient.stock_id])
    }catch(error){
        console.log("Error while adding ingredient", error);
    }
}

//returns a list of recipes that can be made based on what we have in our stock
export const generateRecipeList = async(db) =>{
    try{
        const allResults = await db.getAllAsync(`
            SELECT recipe_list.*
            FROM recipe_list
            INNER JOIN ingredient_list ON recipe_list.id = ingredient_list.recipe_id
            INNER JOIN stock_list ON ingredient_list.stock_id = stock_list.id
            GROUP By recipe_list.id
            HAVING MIN(CAST(stock_list.quantity AS INTEGER) >= CAST(ingredient_list.quantity AS INTEGER)) = 1;
            `);
            return allResults;
    }catch(error){
        console.log("Error while generating recipe", error);
        return [];
    }
}

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