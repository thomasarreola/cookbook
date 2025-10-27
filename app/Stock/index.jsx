import { Text, View, SafeAreaView, FlatList } from "react-native";
import { useEffect, useState } from "react";
import {SQLiteProvider, useSQLiteContext} from "expo-sqlite";
import {useIsFocused} from "@react-navigation/native";
import AddButton from "../components/AddButton";
import StockCard from "../components/StockCard";
import { styles } from "../styles";


export default function stock() {
  return (
    <SQLiteProvider databaseName="kitchen.db">
      <SafeAreaView style={styles.usableArea}>
        <View style={{display: "flex", alignItems: "center",}}>
            <AddButton link={"../Stock/StockInputPage"}/>
        </View>
        <StockCards />
  
      </SafeAreaView>
    </SQLiteProvider>
  );
}

const StockCards = () => {
  const db = useSQLiteContext();
  const [stock, setStock] = useState([]);
  const isFocused = useIsFocused();
  
  const getStock = async () =>{
    try{
      const allStock = await db.getAllAsync(`SELECT * FROM stock_list`);
      setStock(allStock);
    }catch(error){
      console.log("Stock list did not load", error);
    }
  }
  
  useEffect(()=>{
    //deleteAllEntries(db, "stock");
    getStock();
  },[isFocused]);
  
  return(
    <>
      {stock.length === 0 ? (<Text>No Stock</Text>) :
      (
      
      <FlatList
      contentContainerStyle={styles.scrollViewStock}
        data={stock}
        renderItem={({item})=>(
          <StockCard name={item.name} id={item.id} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      ></FlatList>
      )}
    </>
  );
}
