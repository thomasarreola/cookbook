import {Text, Button, Pressable, View, SafeAreaView} from "react-native";
import {useRouter, Link} from "expo-router";
import {styles} from "../styles";

export default function Planner(){
    return(
        <ButtonList />
    );
}

const ButtonList = () =>{
    const router = useRouter();
    return(
    <>
        <SafeAreaView style={styles.usableAreaCenter}>
        <Link href={"../Planner/RecipeGenerator"} push asChild>
            <Pressable>
                <View style={styles.recipeGeneratorView}>
                    <Text style={styles.recipeGeneratorText}>Generate Recipes</Text>
                </View>
            </Pressable>
        </Link>
        </SafeAreaView>
    </>
    );
}