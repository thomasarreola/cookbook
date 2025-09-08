import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  usableArea: {
    backgroundColor: "white",
    flex: 1,
  },
  scrollView: {
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
    display: "flex",
    alignItems: "center",
    margin: "3%",
  },
});
