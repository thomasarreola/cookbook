import React from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import RecipeCard from "../components/RecipeCard";
import { styles } from "../styles";

export default function Recipes() {
  return (
    <SafeAreaView style={styles.usableArea}>
      <ScrollView contentContainerStyle={styles.scrollViewRecipe}>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </ScrollView>
    </SafeAreaView>
  );
}
