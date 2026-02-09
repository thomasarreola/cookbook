import { useIsFocused } from "@react-navigation/native";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { generateRecipeList } from "../../src/lib";
import { Colors } from "../../src/theme";
import RecipeCard from "../components/RecipeCard";
export default function RecipeGenerator() {
  return (
    <SQLiteProvider databaseName="kitchen.db">
      <SafeAreaView style={styles.usableArea}>
        <RecipeList />
      </SafeAreaView>
    </SQLiteProvider>
  );
}

const RecipeList = () => {
  const isFocused = useIsFocused();
  const db = useSQLiteContext();

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const loadRecipes = async () => {
      const data = await generateRecipeList(db);
      setRecipes(data);
    };

    loadRecipes();
  }, [isFocused]);

  return (
    <View>
      {recipes.length == 0 ? (
        <Text>No Recipes</Text>
      ) : (
        <FlatList
          contentContainerStyle={styles.scrollView}
          data={recipes}
          renderItem={({ item }) => (
            <RecipeCard
              name={item.name}
              id={item.id}
              rating={item.rating}
              time={item.time}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    alignItems: "center",
  },
  usableArea: {
    backgroundColor: Colors.background,
    flex: 1,
  },
});
