import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "../styles";
const foodImage = require("../../assets/images/foodP.png");

export default function RecipeCard() {
  return (
    <View style={styles.recipeCard}>
      <View style={styles.recipeImageContainer}>
        <Image source={foodImage} style={styles.recipeImage} />
      </View>
      <Text style={styles.recipeNameText}>Recipe Name</Text>
    </View>
  );
}
