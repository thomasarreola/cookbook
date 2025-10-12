import {Text, TextInput, SafeAreaView, Button, View} from "react-native";
import {useSQLiteContext, SQLiteProvider} from "expo-sqlite";
import {useRouter} from "expo-router";
import {styles} from "../styles";
import {useState, useEffect} from "react";
import {addRecipe} from "../lib"

export default function RecipeInputPage(){
    return(
        <SQLiteProvider databaseName="kitchen.db">
            <RecipeInputForm />
        </SQLiteProvider>
    );
}

const RecipeInputForm = () =>{
    const [name, setName] = useState("");
    const [mastery, setMastery] = useState(0);
    const router = useRouter();
    const db = useSQLiteContext();
    return(
        <SafeAreaView>
            <Text>Recipe name:</Text>
            <TextInput
            onChangeText={(n)=>{setName(n)}}
            ></TextInput>
            <Text>Mastery:</Text>
            <TextInput
            onChangeText={(m)=>{setMastery(m)}}
            ></TextInput>
            <Button
            title={"Add Recipe"}
            onPress={()=>{addRecipe({name: name, mastery: mastery},db, "recipes"); router.back();}}     
            ></Button>
        </SafeAreaView>
    );
}
