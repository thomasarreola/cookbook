import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../theme";
const stockImage = require("../../assets/images/foodP.png");

export default function StockCard(props: any) {
  return (
    <Link key={props.id} href={`../Pantry/${props.id}`} push asChild>
      <Pressable style={styles.stockCard}>
        <View>
          <View style={styles.stockCardImageContainer}>
            <Image source={stockImage} style={styles.stockCardImage} />
          </View>
          <Text style={styles.stockCardText}>
            {props.name}: {props.quantity} grams
          </Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  stockCard: {
    backgroundColor: Colors.bars,
    borderWidth: 5,
    borderColor: Colors.bars,
    borderStyle: "solid",
    borderRadius: 10,
    width: "40%",
    aspectRatio: "1/1",
    display: "flex",
    alignItems: "center",
    marginTop: "3%",
    flexShrink: 0,
    boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
  },

  stockCardImageContainer: {
    width: "80%",
    aspectRatio: "1/1",
  },
  stockCardImage: {
    height: "100%",
    width: "100%",
  },
  stockCardText: {},
});
