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

  scrollViewStock: {
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    flexShrink: 0,
    alignItems: "center",
  },

  recipeCard: {
    borderWidth: 5,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 10,
    width: "80%",
    aspectRatio: "4/1",
    display: "flex",
    alignItems: "center",
    margin: "3%",
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
});
