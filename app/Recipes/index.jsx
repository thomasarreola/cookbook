import { Text, View, SafeAreaView, FlatList } from "react-native";
import { useSQLiteContext, SQLiteProvider } from "expo-sqlite";
import { useState, useEffect } from "react";
import { useIsFocused } from '@react-navigation/native';
import AddButton from "../components/AddButton";
import RecipeCard from "../components/RecipeCard";
import { styles } from "../styles";


export default function Recipes() {
  return (
    <SQLiteProvider databaseName="kitchen.db">
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

  
  //this gets all entries from recipe_list and puts it into an array, did not add it to lib because very limited usecase for this one
  const getRecipes = async () => {
    try {
      const allRecipes = await db.getAllAsync(
        `SELECT * FROM recipe_list`
      );
      setRecipes(allRecipes);
    } catch (error) {
      console.log("Recipe list did not load: ", error);
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
