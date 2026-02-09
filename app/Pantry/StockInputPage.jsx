import { useRouter } from "expo-router";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { useState } from "react";
import { Button, SafeAreaView, Text, TextInput } from "react-native";
import { addStock } from "../../src/lib";

export default function StockInputPage() {
  return (
    <SQLiteProvider databaseName="kitchen.db">
      <StockInputForm />
    </SQLiteProvider>
  );
}

const StockInputForm = () => {
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState(0);
  const router = useRouter();
  const db = useSQLiteContext();

  const handleAddStock = async () => {
    if (!name) return;
    await addStock(db, { name: name, quantity: quantity });
    router.back();
  };

  return (
    <SafeAreaView>
      <Text>Stock name: </Text>
      <TextInput onChangeText={(n) => setName(n)}></TextInput>
      <Text>Quantity: </Text>
      <TextInput onChangeText={(n) => setQuantity(n)}></TextInput>
      <Button title="Add Stock" onPress={handleAddStock}></Button>
    </SafeAreaView>
  );
};
