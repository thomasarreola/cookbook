import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors, TextSize } from "../theme";

export default function AddButton(prop: any) {
  const [clicked, setClicked] = useState(0);

  if (clicked > 0) {
    setClicked(0);
  }
  return (
    <Link href={prop.link} push asChild>
      <Pressable
        onPress={() => {
          setClicked(clicked + 1);
        }}
        style={{ flexGrow: 1 }}
      >
        <View style={styles.addButtonBuffer}>
          <View style={[styles.addButton, { width: prop.width }]}>
            <Text style={styles.addButtonText}>{prop.text}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  addButtonBuffer: {
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    borderColor: Colors.important,
    borderWidth: 5,
    borderStyle: "solid",
    backgroundColor: Colors.important,
    aspectRatio: "4/1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
  },
  addButtonText: {
    color: Colors.bars,
    fontSize: TextSize.medium,
    fontWeight: "bold",
    zIndex: 100,
  },
});
