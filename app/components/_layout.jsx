import { Tabs, Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen name="AddButton"  options={{href: null}}/>
      <Tabs.Screen name="RecipeCard"  options={{href: null}}/>
      <Tabs.Screen name="StockCard"  options={{href: null}}/>
    </Tabs>
  );
}