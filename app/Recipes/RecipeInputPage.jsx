import { useRouter } from "expo-router";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { addRecipe } from "../../src/lib";
import { styles } from "../../src/styles";
import { Colors, TextSize } from "../../src/theme";

export default function RecipeInputPage() {
  return (
    <SafeAreaView style={styless.usableAreaCenter}>
      <SQLiteProvider databaseName="kitchen.db">
        <URecipeInputForm />
      </SQLiteProvider>
    </SafeAreaView>
  );
}
const URecipeInputForm = () => {
  //this holds recipe name value to be put into database
  const [name, setName] = useState("");
  //this holds rating recipe value to be put into database
  const [rating, setRating] = useState(0);
  //this holds the time recipe value to be put into the database, its in minutes
  const [time, setTime] = useState(0);
  //this holds the string of ingredients that we have already added to display to user
  const [ingredients, setIngredients] = useState([]);
  //this holds the current ingredient that is inputted in textinput
  const [currentIngredient, setCurrentIngredient] = useState("");
  //this holds the quantity of the current ingredient
  const [ingredientQuantity, setIngredientQuantity] = useState(0);
  //this holds the instructions for how to make the recipe
  const [instructions, setInstructions] = useState("");
  //this holds the number of servings that the recipe gives
  const [servings, setServings] = useState(0);

  //this holds the measurement of the ingredient that the recipe will need
  const [measurement, setMeasurement] = useState("");

  const router = useRouter();
  const db = useSQLiteContext();

  //adds ingredient to the end the end of the array when ran
  const setIArray = () => {
    //this is just so its easier to keep track of all ingredient information
    const newIngredient = {
      id: Date.now().toString() + Math.random().toString(),
      name: currentIngredient,
      quantity: ingredientQuantity,
    };

    setIngredients([...ingredients, newIngredient]);
    setCurrentIngredient("");
    setIngredientQuantity(0);
  };
  return (
    <>
      <View style={styless.recipeInputCardOuterView}>
        <TextInput
          onChangeText={(n) => {
            setName(n);
          }}
          placeholder="Recipe Name"
          placeholderTextColor={Colors.lesser}
          style={styless.recipeInputCardTextInputName}
        ></TextInput>
        <View style={styless.recipeInputCardDetailsView}>
          <View style={styless.recipeInputCardPrepTimeView}>
            <Text style={styless.recipeInputCardPrepTimeTitle}>Prep Time</Text>
            <View style={styless.recipeInputCardTimeInputView}>
              <TextInput
                style={styless.recipeInputCardTextInputHour}
                placeholder="Hr"
                placeholderTextColor={Colors.lesser}
              ></TextInput>
              <TextInput
                style={styless.recipeInputCardTextInputMinute}
                placeholder="Min"
                placeholderTextColor={Colors.lesser}
              ></TextInput>
            </View>
          </View>
          <View style={styless.recipeInputCardExtraView}>
            <TextInput
              onChangeText={(n) => {
                setRating(n);
              }}
              style={styless.recipeInputCardTextInputRating}
              placeholder="Rating"
              placeholderTextColor={Colors.lesser}
            ></TextInput>
            <TextInput
              onChangeText={(n) => {
                setServings(n);
              }}
              style={styless.recipeInputCardTextInputServings}
              placeholder="# servings"
              placeholderTextColor={Colors.lesser}
            ></TextInput>
          </View>
        </View>
      </View>

      <View style={styless.instructionInputCardOuterView}>
        <Text style={styless.instructionInputCardTitle}>Instructions</Text>
        <TextInput
          onChangeText={(n) => {
            setInstructions(n);
          }}
          style={styless.instructionInputCardTextInput}
          multiline={true}
        ></TextInput>
      </View>

      <View style={styless.ingredientListCardOuterView}>
        {ingredients.length == 0 ? (
          <Text style={styless.ingredientListCardText}>No Ingredients Yet</Text>
        ) : (
          <FlatList
            data={ingredients}
            renderItem={({ item }) => (
              <Text>
                {item.quantity} {item.name}
              </Text>
            )}
            keyExtractor={(item) => item.id}
          ></FlatList>
        )}
      </View>

      <View style={styless.ingredientInputListOuterView}>
        <TextInput
          onChangeText={(n) => {
            setCurrentIngredient(n);
          }}
          style={styless.ingredientInputListTextInput}
          placeholder="Name"
          placeholderTextColor={Colors.lesser}
          value={currentIngredient}
        ></TextInput>
        <TextInput
          onChangeText={(n) => {
            setIngredientQuantity(n);
          }}
          style={styless.ingredientInputListQuantityTextInput}
          placeholder="#"
          placeholderTextColor={Colors.lesser}
          value={ingredientQuantity}
        ></TextInput>
        <TextInput
          style={styless.ingredientInputListTextInput}
          placeholder="Type"
        ></TextInput>

        <Pressable
          style={styless.ingredientInputListAddButton}
          onPress={setIArray}
        >
          <View style={styless.ingredientInputListInnerView}>
            <Text style={styless.ingredientInputListAddButtonText}>+</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

const RecipeInputForm = () => {
  //this holds recipe name value to be put into database
  const [name, setName] = useState("");
  //this holds rating recipe value to be put into database
  const [rating, setRating] = useState(0);
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
      <Text style={styles.textRecipePage}>Rating:</Text>
      <TextInput
        onChangeText={(m) => {
          setRating(Number(m));
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
        onPress={async () => {
          await addRecipe(db, {
            name: name,
            rating: rating,
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

const styless = StyleSheet.create({
  usableAreaCenter: {
    backgroundColor: Colors.background,
    flex: 1,
    alignItems: "center",
    gap: "3%",
    marginTop: "3%",
  },
  recipeInputCardOuterView: {
    backgroundColor: "white",
    width: "90%",
    aspectRatio: "3/1",
    boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  recipeInputCardTextInputName: {
    backgroundColor: Colors.background,
    width: "90%",
    aspectRatio: "10/1",
    fontFamily: "AveriaSerifLibre_400Regular",
    color: Colors.lesser,
    paddingLeft: "5%",
    borderRadius: 5,
    fontSize: TextSize.large,
  },
  recipeInputCardDetailsView: {
    flexDirection: "row",
    width: "80%",
    aspectRatio: "9/1",
  },
  recipeInputCardPrepTimeView: {
    gap: 5,
    width: "25%",
    aspectRatio: "1/1",
  },
  recipeInputCardPrepTimeTitle: {
    color: Colors.textSecondary,
    fontFamily: "AveriaSerifLibre_400Regular",
  },
  recipeInputCardTimeInputView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  recipeInputCardTextInputHour: {
    backgroundColor: Colors.background,
    borderRadius: 5,
    fontFamily: "AveriaSerifLibre_400Regular",
  },
  recipeInputCardTextInputMinute: {
    backgroundColor: Colors.background,
    borderRadius: 5,
    fontFamily: "AveriaSerifLibre_400Regular",
  },
  recipeInputCardExtraView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "75%",
    aspectRatio: "8/1",
  },
  recipeInputCardTextInputRating: {
    backgroundColor: Colors.background,
    borderRadius: 5,
    fontFamily: "AveriaSerifLibre_400Regular",
    width: "40%",
    aspectRatio: "4/1",
    textAlign: "center",
  },
  recipeInputCardTextInputServings: {
    backgroundColor: Colors.background,
    borderRadius: 5,
    fontFamily: "AveriaSerifLibre_400Regular",
    width: "40%",
    aspectRatio: "4/1",
    textAlign: "center",
  },
  instructionInputCardOuterView: {
    backgroundColor: Colors.bars,
    width: "90%",
    aspectRatio: "1/0.9",
    borderRadius: 21,
    boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    gap: "2%",
  },
  instructionInputCardTitle: {
    fontFamily: "AveriaSerifLibre_400Regular",
    fontSize: TextSize.large,
  },
  instructionInputCardTextInput: {
    backgroundColor: Colors.background,
    borderRadius: 5,
    width: "90%",
    aspectRatio: "1/0.8",
    padding: "3%",
    fontFamily: "AveriaSerifLibre_400Regular",
  },
  ingredientListCardOuterView: {
    width: "90%",
    aspectRatio: "4/1",
    backgroundColor: Colors.bars,
    boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
    borderRadius: 21,
    padding: "3%",
    gap: "2%",
  },
  ingredientListCardText: {
    color: Colors.textSecondary,
  },
  ingredientInputListOuterView: {
    width: "80%",
    aspectRatio: "8/1",
    backgroundColor: Colors.bars,
    boxShadow: "0px 4px 4px 0 rgba(8, 4, 4, 0.25)",
    borderRadius: 21,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "4%",
  },
  ingredientInputListTextInput: {
    width: "20%",
    aspectRatio: "3/1",
    backgroundColor: Colors.background,
    textAlign: "center",
    borderRadius: 5,
    fontFamily: "AveriaSerifLibre_400Regular",
  },
  ingredientInputListQuantityTextInput: {
    width: "10%",
    aspectRatio: "1.5/1",
    backgroundColor: Colors.background,
    textAlign: "center",
    borderRadius: 5,
    fontFamily: "AveriaSerifLibre_400Regular",
  },
  ingredientInputListAddButton: {
    width: "23%",
    aspectRatio: "3/1",
    backgroundColor: Colors.important,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  ingredientInputListInnerView: {
    width: "100%",
    height: "100%",
  },
  ingredientInputListAddButtonText: {
    color: Colors.bars,
    textAlign: "center",
    fontSize: TextSize.large,
    paddingBottom: "30%",
  },
});
