import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import { styles } from "../styles";
const foodImage = require("../../assets/images/foodP.png");

export default function RecipeCard(props: any) {
  return (
    <Link key={props.id} href={`../Recipes/${props.id}`} push asChild>
      <Pressable>
        <View style={styles.recipeCard}>
          <View style={styles.recipeImageContainer}>
            <Image source={foodImage} style={styles.recipeImage} />
          </View>
          <Text style={styles.recipeNameText}>{props.name}</Text>
        </View>
      </Pressable>
    </Link>
  );
}
