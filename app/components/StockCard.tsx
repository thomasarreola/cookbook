import { View, Text, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import { styles } from "../styles";
const stockImage = require("../../assets/images/foodP.png");

export default function StockCard(props: any) {
  return (
    <Link key={props.id} href={`../Stock/${props.id}`} push asChild>
      <Pressable style={styles.stockCard}>
        <View>
          <View style={styles.stockImageContainer}>
            <Image source={stockImage} style={styles.stockImage} />
          </View>
          <Text>
            {props.name} {props.quantity}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
}
