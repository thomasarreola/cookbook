import { useIsFocused } from "@react-navigation/native";
import { Stack } from "expo-router";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { Colors } from "../../src/theme";
import AddButton from "../components/AddButton";
import StockCard from "../components/StockCard";

export default function stock() {
  return (
    <>
      <Stack.Screen options={{ title: "Pantry" }} />
      <SQLiteProvider databaseName="kitchen.db">
        <SafeAreaView style={styles.usableArea}>
          <StockCards />
          <AddButton
            link={"../Pantry/StockInputPage"}
            text={"Add Item"}
            width={"45%"}
          />
        </SafeAreaView>
      </SQLiteProvider>
    </>
  );
}

const StockCards = () => {
  const db = useSQLiteContext();
  const [stock, setStock] = useState([]);
  const isFocused = useIsFocused();

  const getStock = async () => {
    try {
      const allStock = await db.getAllAsync(`SELECT * FROM stock_list`);
      setStock(allStock);
    } catch (error) {
      console.log("Stock list did not load", error);
    }
  };

  useEffect(() => {
    //deleteAllEntries(db, "stock");
    getStock();
  }, [isFocused]);

  return (
    <>
      {stock.length === 0 ? (
        <Text>No Stock</Text>
      ) : (
        <FlatList
          contentContainerStyle={styles.scrollViewStock}
          data={stock}
          renderItem={({ item }) => (
            <StockCard name={item.name} id={item.id} quantity={item.quantity} />
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
        ></FlatList>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  usableArea: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  scrollViewStock: {
    flexGrow: 1,
  },
  row: {
    justifyContent: "space-around",
  },
});
