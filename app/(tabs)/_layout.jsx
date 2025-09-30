import { Tabs, Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen name="Recipes" />
      <Tabs.Screen name="Stock" />
    </Tabs>
  );
};
