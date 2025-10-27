import {Text, TextInput, View, Button, SafeAreaView} from "react-native";
import { SQLiteProvider , useSQLiteContext} from "expo-sqlite";
import {useState} from "react";
import {useRouter} from "expo-router";
import {addStock} from "../lib"

export default function StockInputPage(){
    return(
        <SQLiteProvider databaseName = "kitchen.db">
            <StockInputForm />
        </SQLiteProvider>
    );
}

const StockInputForm = () =>{
    const [name, setName] = useState();
    const router = useRouter();
    const db = useSQLiteContext();
    return(
        <SafeAreaView>
            <Text>Stock name: </Text>
            <TextInput
             onChangeText={(n)=>setName(n)}
            ></TextInput>
            <Button
             title="Add Stock"
             onPress={()=>{addStock({name: name}, db, "stock_list"); router.back();}}
            ></Button>
        </SafeAreaView>
    );
}