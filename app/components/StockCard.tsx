import { View, Text, Image } from "react-native";
import { styles } from "../styles";
const stockImage = require("../../assets/images/foodP.png");

export default function StockCard() {
  return (
    <View style={styles.stockCard}>
      <View style={styles.stockImageContainer}>
        <Image source={stockImage} style={styles.stockImage} />
      </View>
      <Text>Stock Item Name</Text>
    </View>
  );
}
