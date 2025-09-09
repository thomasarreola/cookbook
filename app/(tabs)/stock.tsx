import { Text, View, SafeAreaView, ScrollView } from "react-native";
import StockCard from "../components/StockCard";
import { styles } from "../styles";

export default function stock() {
  return (
    <SafeAreaView style={styles.usableArea}>
      <ScrollView contentContainerStyle={styles.scrollViewStock}>
        <StockCard />
        <StockCard />
        <StockCard />
        <StockCard />
      </ScrollView>
    </SafeAreaView>
  );
}
