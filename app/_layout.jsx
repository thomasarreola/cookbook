import { Tabs, Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen name="Recipes" />
      <Tabs.Screen name="Stock" />
      <Tabs.Screen name="index"  options={{href: null}}/>
      <Tabs.Screen name="components"  options={{href: null}}/>
    </Tabs>
  );
};
