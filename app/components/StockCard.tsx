import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { BreadIcon } from "tdesign-icons-react-native";
import { Colors, TextSize } from "../../src/theme";
const stockImage = require("../../assets/images/foodP.png");

export default function StockCard(props: any) {
  return (
    <Link key={props.id} href={`../Pantry/${props.id}`} push asChild>
      <Pressable style={styles.stockCard}>
        <View>
          <View style={styles.stockCardTitleContainer}>
            <BreadIcon />
            <Text style={styles.stockCardTitleText}>{props.name}</Text>
          </View>
          <View style={styles.stockCardTextView}>
            <Text style={styles.stockCardText}>
              {props.quantity} {props.name}
              {props.quantity > 1 ? "s" : ""}
            </Text>
          </View>
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
    aspectRatio: "1.4/1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3%",
    flexShrink: 0,
    boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
  },

  stockCardTitleContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 3,
  },
  stockCardTitleText: {
    fontFamily: "AveriaSerifLibre_400Regular",
    fontSize: TextSize.Large,
  },
  stockCardTextView: {
    justifyContent: "center",
    alignItems: "center",
  },
  stockCardText: {},
});
