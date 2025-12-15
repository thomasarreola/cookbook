import {Text, View, FlatList, SafeAreaView} from "react-native";
import {useState, useEffect} from "react";
import { useIsFocused } from '@react-navigation/native';
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import {generateRecipeList} from "../lib";
import RecipeCard from "../components/RecipeCard";
import {styles} from "../styles";
export default function RecipeGenerator(){
    return(
        <SQLiteProvider databaseName="kitchen.db">
              <SafeAreaView style={styles.usableArea}>
                <RecipeList />
              </SafeAreaView>
        </SQLiteProvider>
        
    );
}


const RecipeList = () =>{
    const isFocused = useIsFocused();
    const db = useSQLiteContext();

    const [recipes, setRecipes] = useState([]);

    

    useEffect(()=>{
        const loadRecipes = async () => {
        const data = await generateRecipeList(db);
            setRecipes(data);
        };

        loadRecipes();
    },[isFocused]);

    return(
        <View>
        {recipes.length == 0 ? (<Text>No Recipes</Text>) :
        (
        
            <FlatList
            contentContainerStyle={styles.scrollViewRecipe}
            data={recipes}
            renderItem={({item}) =>(
                <RecipeCard name={item.name} id={item.id}/>
            )}
            keyExtractor={(item) => item.id.toString()}
            />
        )}
        </View>
    );
}