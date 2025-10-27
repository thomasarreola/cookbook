import {Text, TextInput, SafeAreaView, Button, View, Pressable} from "react-native";
import {useSQLiteContext, SQLiteProvider} from "expo-sqlite";
import {useRouter} from "expo-router";
import {styles} from "../styles";
import {useState, useEffect} from "react";
import {addRecipe} from "../lib"

export default function RecipeInputPage(){
    return(
        <SafeAreaView style={styles.usableAreaCenter}>
        <SQLiteProvider databaseName="kitchen.db">
            <RecipeInputForm />
        </SQLiteProvider>
        </SafeAreaView>
    );
}

const RecipeInputForm = () =>{
    //this holds recipe name value to be put into database
    const [name, setName] = useState("");
    //this holds mastery recipe value to be put into database
    const [mastery, setMastery] = useState(0);
    //this holds the string of ingredients that we have already added to display to user
    const [ingredients, setIngredients] = useState([]);
    //this holds the current ingredient that is inputted in textinput
    const [currentIngredient, setCurrentIngredient] = useState('');
    const router = useRouter();
    const db = useSQLiteContext();
    
    const ingredientList = ingredients.toString();

    const setIArray = () =>{
        setIngredients([...ingredients, currentIngredient]);
        setCurrentIngredient('');
    }
    return(
        <>
            <Text style={styles.textRecipePage}>Recipe name:</Text>
            <TextInput
            onChangeText={(n)=>{setName(n)}}
            style={styles.textInputRecipePage}
            autoCorrect={false}
            ></TextInput>
            <Text style={styles.textRecipePage}>Mastery:</Text>
            <TextInput
            onChangeText={(m)=>{setMastery(m)}}
            style={styles.textInputRecipePage}
            autoCorrect={false}
            ></TextInput>
            <Text style={styles.textRecipePage}>Ingredients</Text>
            <View style={{display: "flex", flexDirection: "row",}}>
                <TextInput
                style={styles.textInputRecipePage}
                onChangeText={(m)=>setCurrentIngredient(m)}
                value={currentIngredient}
                autoCorrect={false}
                ></TextInput>
                <Pressable
                onPress={setIArray}
                >
                    <View style={{borderColor: "black", borderWidth: 1, width: 27, aspectRatio: "1/1", display: "flex", justifyContent: "center", alignItems: "center",}}>
                        <Text style={{fontWeight: "bold",}}>+</Text>
                    </View>
                </Pressable>
            </View>
            <Text>{ingredientList}</Text>
            <Button
            title={"Add Recipe"}
            onPress={()=>{addRecipe({name: name, mastery: mastery},db, "recipe_list"); router.back();}}    
            style={styles.addRecipeButtonRecipePage} 
            ></Button>
        </>
    );
}
