import React from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import RecipeCard from "../components/RecipeCard";
import { styles } from "../styles";
import * as SQLite from "expo-sqlite";
import { useSQLiteContext, SQLiteProvider } from "expo-sqlite";
import { useState, useEffect } from "react";
import AddButton from "../components/AddButton";
import { Link } from "expo-router";

async function initRecipeDatabase(db) {
  try {
    await db.execAsync(`    
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS recipes 
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            mastery INTEGER
        );
    `);
    console.log("Created recipe database successfully");
  } catch (error) {
    console.log("Error creating recipe database ", error);
  }
}

export default function Recipes() {
  return (
    <SQLiteProvider databaseName="kitchen.db" onInit={initRecipeDatabase}>
      <SafeAreaView style={styles.usableArea}>
        <View style={{display: "flex", alignItems: "center",}}>
            <AddButton link={"../Recipes/RecipePage"}/>
        </View>
        <RecipeCards />
      </SafeAreaView>
    </SQLiteProvider>
  );
}

const RecipeCards = () => {
    //connects the database
  const db = useSQLiteContext();

  //is used to hold the list of all recipes
  const [recipes, setRecipes] = useState([]);

  //loads in all recipes when program starts one time
  
  const getRecipes = async () => {
    try {
      const allRecipes = await db.getAllAsync(
        `SELECT * FROM recipes`
      );
      setRecipes(allRecipes);
    } catch (error) {
      console.log("Recipes did not load: ", error);
    }
  }
  const addRecipe = async (newRecipe) => {
    try{
        const statement = await db.prepareAsync(`INSERT INTO recipes (name, mastery) VALUES(?,?)`);
        await statement.executeAsync([newRecipe.name, newRecipe.mastery]);
        await getRecipes();
    }catch(error){
        console.log("Error while adding recipe", error);
    }
  }

  const deleteAllRecipes = async () => {
    try{
      await db.runAsync(`DELETE FROM recipes`);
    }catch(error){
      console.log("Error deleting all recipes", error);
    }
  }
  
  useEffect(() => {
    addRecipe({name: "Sandwich", mastery: 10});
    getRecipes();
    }, []);

  return (
    <View>
      {recipes.length === 0 ? (<Text>No Recipes</Text>) :
      (
        <FlatList
          contentContainerStyle={styles.scrollViewRecipe}
          data={recipes}
          renderItem={({ item }) => (
            <RecipeCard name={item.name}/>
          )}
          keyExtractor={(item) => item.id.toString()}
        ></FlatList>
        )}
    </View>
  );
};
