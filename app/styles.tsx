import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  usableArea: {
    backgroundColor: "white",
    flex: 1,
  },
  scrollViewRecipe: {
    flexGrow: 1,
    alignItems: "center",
  },

  recipeCard: {
    borderWidth: 5,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 10,
    width: "80%",
    aspectRatio: "4/1",
    margin: "3%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  recipeNameText: {
    fontSize: 30,
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

  scrollViewStock: {
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    flexShrink: 0,
    alignItems: "center",
  },

  stockCard: {
    borderWidth: 5,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 10,
    width: "40%",
    aspectRatio: "1/1",
    display: "flex",
    alignItems: "center",
    marginTop: "3%",
  },

  stockImageContainer: {
    width: "80%",
    aspectRatio: "1/1",
  },

  stockImage: {
    height: "100%",
    width: "100%",
  },
});
