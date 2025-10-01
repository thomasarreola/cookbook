import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { styles } from "../styles";
import { useState } from "react";

export default function AddButton() {
  const [clicked, setClicked] = useState(0);

  if (clicked > 0) {
    console.log("button was clicked", clicked);
    setClicked(0);
  }
  return (
    <Link href="../Recipes/RecipePage" push asChild>
      <Pressable
        onPress={() => {
          setClicked(clicked + 1);
        }}
        style={{ flexGrow: 1 }}
      >
        <View style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </View>
      </Pressable>
    </Link>
  );
}
