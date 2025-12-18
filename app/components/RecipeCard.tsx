import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { Colors, TextSize } from "../theme";
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

const styles = StyleSheet.create({
  recipeCard: {
    borderWidth: 5,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 10,
    width: "90%",
    aspectRatio: "4/1",
    margin: "3%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  recipeImageContainer: {
    width: "20%",
    aspectRatio: "1/1",
    margin: "2%",
  },
  recipeImage: {
    height: "100%",
    width: "100%",
  },
  recipeNameText: {
    fontSize: 30,
  },
});
