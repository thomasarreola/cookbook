import {Text} from "react-native";
import {useLocalSearchParams} from "expo-router";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import {useEffect, useState} from "react";
import {accessEntry} from "../lib";

export default function RecipeLoad(){
    return (
        <SQLiteProvider databaseName={"kitchen.db"}>
            <RecipePage />
        </SQLiteProvider>
    );
}

const RecipePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState(null);
    const db = useSQLiteContext();
    const {id} = useLocalSearchParams();

    //Needs to run this when page loads in for the first time not when app starts
    useEffect(()=>{
        //am doing an async component so that I can use a promise to make sure the item properly loads
        const loadData = async () =>{
            setItem(await accessEntry(db, "recipes", id));
            setIsLoading(false);
        }
            
        
        loadData();
    },[db, id]);

    //Need to do this because React Native will load the component before it queries it making it blank
    if(!isLoading){
        return(
            <Text>{item.name}</Text>
        );
    }
    
}