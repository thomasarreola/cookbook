import { Text, View, SafeAreaView, ScrollView, FlatList } from "react-native";
import StockCard from "../components/StockCard";
import { styles } from "../styles";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import {SQLiteProvider, useSQLiteContext} from "expo-sqlite";
import AddButton from "../components/AddButton";

async function initStockDatabase(db) {
  try {
    await db.execAsync(`    
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS stock 
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT
        );
    `);
    console.log("Created stock database successfully");
  } catch (error) {
    console.log("Error creating stock database ", error);
  }
}

export default function stock() {
  return (
    <SQLiteProvider databaseName="kitchen.db" onInit={initStockDatabase}>
      <SafeAreaView style={styles.usableArea}>
        <View style={{display: "flex", alignItems: "center",}}>
            <AddButton link={"../Stock/StockPage"}/>
        </View>
        <StockCards />
  
      </SafeAreaView>
    </SQLiteProvider>
  );
}

const StockCards = () => {
  const db = useSQLiteContext();
  const [stock, setStock] = useState([]);
  
  const getStock = async () =>{
    try{
      const allStock = await db.getAllAsync(`SELECT * FROM stock`);
      setStock(allStock);
    }catch(error){
      console.log("Stock did not load", error);
    }
  }
  const addStock = async (newStock) => {
    try{
        const statement = await db.prepareAsync(`INSERT INTO stock (name) VALUES(?)`);
        await statement.executeAsync([newStock.name]);
        await getStock();
    }catch(error){
        console.log("Error while adding stock", error);
    }
  }
  useEffect(()=>{
    addStock({name: "carrot"});
    getStock();
  },[]);
  
  return(
    <View>
      {stock.length === 0 ? (<Text>No Stock</Text>) :
      (
      
      <FlatList
      contentContainerStyle={styles.scrollViewStock}
        data={stock}
        renderItem={({item})=>(
          <StockCard name={item.name} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      ></FlatList>
      )}
    </View>
  );
}
