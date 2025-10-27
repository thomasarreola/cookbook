import {Text, Button} from "react-native";
import {SQLiteProvider, useSQLiteContext} from "expo-sqlite";
import {useEffect, useState} from "react";
import {useLocalSearchParams} from "expo-router";
import {useRouter} from "expo-router";
import {accessEntry, removeEntry} from "../lib"

export default function StockLoad(){
    return(
    <SQLiteProvider databaseName="kitchen.db">
        <StockPage />
    </SQLiteProvider>
    );
}

const StockPage = () =>{
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState(null);
    const db = useSQLiteContext();
    const {id} = useLocalSearchParams();
    const router = useRouter();

    useEffect(()=>{
        const loadData = async () =>{
            setItem(await accessEntry(db, "stock_list", id));
            setIsLoading(false);
        }

        loadData();
    },[db,id]);

    if(!isLoading){
        return(
        <>
            <Text>{item.name}</Text>
            <Button title="Delete Stock" onPress={()=>{removeEntry(db, "stock_list", id); router.back();}}></Button>
        </>
    );
    }
}