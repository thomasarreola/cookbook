import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="Recipes" />
      <Tabs.Screen name="Stock" />
    </Tabs>
  );
};
