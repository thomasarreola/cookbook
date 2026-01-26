import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { StarIcon } from "tdesign-icons-react-native";
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
          <View style={styles.recipeCardInformation}>
            <Text style={styles.recipeCardRecipeTitle}>{props.name}</Text>
            <View>
              <Text>{props.time} minutes</Text>
            </View>
            <View style={styles.recipeCardMasteryView}>
              <Text>{props.mastery} stars</Text>
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

const MasteryDisplay = (props: any) => {
  const count = Math.floor(Number(props.mastery) || 0);
  //console.log(props.mastery);
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <StarIcon key={index} />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  recipeCardOuterView: {
    width: 365,
    height: 100,
    backgroundColor: Colors.bars,
    borderRadius: 5,
    boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
    marginBottom: 10,
    marginTop: 5,
    alignItems: "center",
  },
  recipeCardInformation: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  recipeCardRecipeTitle: {
    fontFamily: "AveriaSerifLibre_400Regular",
    fontSize: TextSize.large,
    color: Colors.important,
    marginTop: 20,
    marginLeft: 20,
  },
  recipeCardMasteryView: {
    flexDirection: "row",
  },
});
