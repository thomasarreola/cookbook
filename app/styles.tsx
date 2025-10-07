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
    width: "90%",
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
    alignItems: "center",
  },

  stockCard: {
    borderWidth: 5,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 10,
    width: "45%",
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
  row: {
    justifyContent: "space-around",
  },

  addButton: {
    borderColor: "black",
    borderWidth: 5,
    borderStyle: "solid",
    backgroundColor: "black",
    width: "90%",
    aspectRatio: "4/1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    top: "3%",
  },

  addButtonText: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    zIndex: 100,
  },
});
