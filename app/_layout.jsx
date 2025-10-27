import { Tabs, Stack } from "expo-router";
import {SQLiteProvider} from "expo-sqlite"
import {initDatabase} from "./database"
export default function TabLayout() {
  return (
    <SQLiteProvider databaseName="kitchen.db" onInit={initDatabase}>
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen name="Recipes" />
      <Tabs.Screen name="Planner" />
      <Tabs.Screen name="Stock" />
      <Tabs.Screen name="index"  options={{href: null}}/>
      <Tabs.Screen name="components"  options={{href: null}}/>
    </Tabs>
    </SQLiteProvider>
  );
};
