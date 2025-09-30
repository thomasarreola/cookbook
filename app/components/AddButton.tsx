import { View, Text, Pressable } from "react-native";

import { styles } from "../styles";
import { useState } from "react";

export default function AddButton() {
  const [clicked, setClicked] = useState(0);

  if (clicked > 0) {
    console.log("button was clicked", clicked);
    setClicked(0);
  }
  return (
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
  );
}
