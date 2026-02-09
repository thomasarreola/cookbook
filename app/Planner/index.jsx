import { Link, Stack, useRouter } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Colors, TextSize } from "../../src/theme";

export default function Planner() {
  return <ButtonList />;
}

const ButtonList = () => {
  const router = useRouter();
  return (
    <>
      <Stack.Screen options={{ title: "Planner" }} />
      <SafeAreaView style={styles.usableAreaCenter}>
        <Link href={"../Planner/RecipeGenerator"} push asChild>
          <Pressable>
            <View style={styles.recipeGeneratorView}>
              <Text style={styles.recipeGeneratorTitle}>Recipes To Make</Text>
              <Text style={styles.recipeGeneratorText}>
                Based on your pantry items
              </Text>
            </View>
          </Pressable>
        </Link>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  usableAreaCenter: {
    backgroundColor: Colors.background,
    flex: 1,
    alignItems: "center",
  },
  recipeGeneratorView: {
    top: "30%",
    backgroundColor: Colors.bars,
    width: "90%",
    aspectRatio: "4/1",
    borderColor: Colors.bars,
    borderStyle: "solid",
    borderWidth: 5,
    borderRadius: 21,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
  },
  recipeGeneratorTitle: {
    fontFamily: "AveriaSerifLibre_400Regular",
    fontSize: TextSize.xlarge,
    fontWeight: 35,
    color: Colors.important,
  },
  recipeGeneratorText: {
    fontFamily: "AveriaSerifLibre_400Regular",
    fontSize: TextSize.medium,
    color: Colors.important,
  },
});
