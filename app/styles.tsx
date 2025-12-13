import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //This is used to set SafeAreaView to something something neutral and maliable
  usableArea: {
    backgroundColor: "white",
    flex: 1,
  },

  //Kind of the same thing as above but except will center everything by default
  usableAreaCenter: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
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
    flexShrink: 0,
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

  recipeGeneratorView: {
    width: "90%",
    aspectRatio: "4/1",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 5,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  recipeGeneratorText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  textInputRecipePage: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    width: "80%",
    aspectRatio: "12/1",
    borderRadius: 1,
  },
  quantityInputRecipePage: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    width: "6.67%",
    aspectRatio: "1/1",
    borderRadius: 1,
  },
  textRecipePage: {
    fontSize: 16,
  },
  addRecipeButtonRecipePage: {},
});
