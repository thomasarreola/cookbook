import { useIsFocused } from "@react-navigation/native";
import { Stack } from "expo-router";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { Colors } from "../../src/theme";
import AddButton from "../components/AddButton";
import RecipeCard from "../components/RecipeCard";
//import { styles } from "../styles";

/*<View style={{display: "flex", alignItems: "center",}}>
            <AddButton link={"../Recipes/RecipeInputPage"}/>
        </View>*/

export default function Recipes() {
  return (
    <SQLiteProvider databaseName="kitchen.db">
      <Stack.Screen options={{ title: "Recipes" }} />
      <SafeAreaView style={styles.safeAreaViewStyle}>
        <RecipeCards />
        <AddButton
          link={"../Recipes/RecipeInputPage"}
          text={"Add Recipe"}
          width={"36%"}
        />
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
      const allRecipes = await db.getAllAsync(`SELECT * FROM recipe_list`);
      setRecipes(allRecipes);
    } catch (error) {
      console.log("Recipe list did not load: ", error);
    }
  };

  useEffect(() => {
    //addRecipe({name: "Salad", mastery: 10},db, "recipes");
    //deleteAllEntries(db, "recipes");
    getRecipes();
  }, [isFocused]);

  return (
    <>
      {recipes.length === 0 ? (
        <Text>No Recipes</Text>
      ) : (
        <FlatList
          style={styles.scrollViewStyle}
          contentContainerStyle={styles.scrollViewStyleContent}
          data={recipes}
          renderItem={({ item }) => (
            <RecipeCard
              name={item.name}
              id={item.id}
              time={item.time}
              mastery={item.mastery}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        ></FlatList>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    backgroundColor: Colors.background,
    flex: 1,
    //alignItems: "center",
  },
  scrollViewContent: {
    width: "100%",
    padding: 0,
  },
  scrollViewStyleContent: {
    flexGrow: 1,
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
});
