import { useRouter } from "expo-router";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { useState } from "react";
import {
    Button,
    Pressable,
    SafeAreaView,
    Text,
    TextInput,
    View,
} from "react-native";
import { addRecipe } from "../lib";
import { styles } from "../styles";

export default function RecipeInputPage() {
  return (
    <SafeAreaView style={styles.usableAreaCenter}>
      <SQLiteProvider databaseName="kitchen.db">
        <RecipeInputForm />
      </SQLiteProvider>
    </SafeAreaView>
  );
}

const RecipeInputForm = () => {
  //this holds recipe name value to be put into database
  const [name, setName] = useState("");
  //this holds mastery recipe value to be put into database
  const [mastery, setMastery] = useState(0);
  //this holds the time recipe value to be put into the database, its in minutes
  const [time, setTime] = useState(0);
  //this holds the string of ingredients that we have already added to display to user
  const [ingredients, setIngredients] = useState([]);
  //this holds the current ingredient that is inputted in textinput
  const [currentIngredient, setCurrentIngredient] = useState("");
  //this holds the quantity of the current ingredient
  const [ingredientQuantity, setIngredientQuantity] = useState(0);

  const router = useRouter();
  const db = useSQLiteContext();

  const ingredientList = ingredients.toString();

  const setIArray = () => {
    setIngredients([...ingredients, [currentIngredient, ingredientQuantity]]);
    setCurrentIngredient("");
  };
  return (
    <>
      <Text style={styles.textRecipePage}>Recipe name:</Text>
      <TextInput
        onChangeText={(n) => {
          setName(n);
        }}
        style={styles.textInputRecipePage}
        autoCorrect={false}
      ></TextInput>
      <Text style={styles.textRecipePage}>
        Time it takes to make the recipe:
      </Text>
      <TextInput
        onChangeText={(n) => {
          setTime(n);
        }}
        style={styles.textInputRecipePage}
        autoCorrect={false}
      ></TextInput>
      <Text style={styles.textRecipePage}>Mastery:</Text>
      <TextInput
        onChangeText={(m) => {
          setMastery(Number(m));
        }}
        style={styles.textInputRecipePage}
        autoCorrect={false}
      ></TextInput>
      <Text style={styles.textRecipePage}>Ingredients</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TextInput
          style={styles.textInputRecipePage}
          onChangeText={(m) => setCurrentIngredient(m)}
          value={currentIngredient}
          autoCorrect={false}
        ></TextInput>
        <TextInput
          style={styles.quantityInputRecipePage}
          onChangeText={(m) => setIngredientQuantity(m)}
          value={ingredientQuantity}
          autoCorrect={false}
        ></TextInput>
        <Pressable onPress={setIArray}>
          <View
            style={{
              borderColor: "black",
              borderWidth: 1,
              width: 27,
              aspectRatio: "1/1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>+</Text>
          </View>
        </Pressable>
      </View>
      <Text>{ingredientList}</Text>
      <Button
        title={"Add Recipe"}
        onPress={() => {
          addRecipe(db, {
            name: name,
            mastery: mastery,
            ingredients: ingredients,
            time: time,
          });
          router.back();
        }}
        style={styles.addRecipeButtonRecipePage}
      ></Button>
    </>
  );
};
