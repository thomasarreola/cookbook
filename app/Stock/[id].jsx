import {Text} from "react-native";
import {SQLiteProvider, useSQLiteContext} from "expo-sqlite";
import {useEffect, useState} from "react";
import {useLocalSearchParams} from "expo-router";
import {accessEntry} from "../lib"

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

    useEffect(()=>{
        const loadData = async () =>{
            setItem(await accessEntry(db, "stock", id));
            setIsLoading(false);
        }

        loadData();
    },[db,id]);

    if(!isLoading){
        return(<Text>{item.name}</Text>);
    }
}