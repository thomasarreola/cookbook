import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { Colors, TextSize } from "../theme";
const foodImage = require("../../assets/images/foodP.png");

export default function RecipeCard(props: any) {
  return (
    /*<Link key={props.id} href={`../Recipes/${props.id}`} push asChild>
      <Pressable>
        <View style={styles.recipeCard}>
          <View style={styles.recipeImageContainer}>
            <Image source={foodImage} style={styles.recipeImage} />
          </View>
          <Text style={styles.recipeNameText}>{props.name}</Text>
        </View>
      </Pressable>
    </Link>*/
    <Link key={props.id} href={`../Recipes/${props.id}`} push asChild>
      <Pressable>
        <View style={styles.recipeCardOuterView}>
          <Image source={foodImage} style={styles.recipeCardImage} />
          <View style={styles.recipeCardInformation}>
            <Text style={styles.recipeCardRecipeTitle}>{props.name}</Text>
            <View>
              <Image></Image>
              <Text></Text>
            </View>
            <View>
              <Image></Image>
              <Text></Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  recipeCardOuterView: {
    width: 365,
    height: 335,
    backgroundColor: Colors.bars,
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
    marginBottom: 10,
    marginTop: 5,
    alignItems: "center",
  },
  recipeCardImage: {
    height: "60%",
    aspectRatio: "1/1",
  },
  recipeCardInformation: {
    width: "100%",
    height: "30%",
  },
  recipeCardRecipeTitle: {
    fontFamily: "AveriaSerifLibre_400Regular",
    fontSize: TextSize.large,
    color: Colors.important,
    marginTop: 20,
    marginLeft: 20,
  },
});

/*const styles = StyleSheet.create({
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
});*/
