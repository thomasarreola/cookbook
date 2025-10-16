import { Text, View, SafeAreaView, FlatList } from "react-native";
import { useSQLiteContext, SQLiteProvider } from "expo-sqlite";
import { useState, useEffect } from "react";
import { useIsFocused } from '@react-navigation/native';
import AddButton from "../components/AddButton";
import RecipeCard from "../components/RecipeCard";
import { styles } from "../styles";


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
            <AddButton link={"../Recipes/RecipeInputPage"}/>
        </View>
        <RecipeCards />
      </SafeAreaView>
    </SQLiteProvider>
  );
}

const RecipeCards = () => {
    //connects the database
  const db = useSQLiteContext();
  const isFocused = useIsFocused();

  //is used to hold the list of all recipes
  const [recipes, setRecipes] = useState([]);

  
  //this reloads the database
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
  
  useEffect(() => {
    //addRecipe({name: "Salad", mastery: 10},db, "recipes");
    //deleteAllEntries(db, "recipes");
    getRecipes();
    }, [isFocused]);

  return (
    <View>
      {recipes.length === 0 ? (<Text>No Recipes</Text>) :
      (
        <FlatList
          contentContainerStyle={styles.scrollViewRecipe}
          data={recipes}
          renderItem={({ item }) => (
            <RecipeCard name={item.name} id={item.id}/>
          )}
          keyExtractor={(item) => item.id.toString()}
        ></FlatList>
        )}
    </View>
  );
};
