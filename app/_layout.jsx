import { Tabs } from "expo-router";
import {SQLiteProvider} from "expo-sqlite";
import {initDatabase} from "./database";
import {Colors, TextSize} from "./theme";
import { BookOpenIcon, RootListIcon, BreadIcon } from "tdesign-icons-react-native";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    
    <SQLiteProvider databaseName="kitchen.db" onInit={initDatabase}>
    <Tabs screenOptions={{
      headerShown: false, 
      tabBarActiveTintColor: Colors.importantIcon, 
      tabBarInactiveTintColor: Colors.lesserIcon,
      tabBarLabelStyle:{
        fontSize: TextSize.small,

      },
      tabBarStyle:{
        height: 91,
      },
      tabBarIconStyle:{
        height: 30,
        width: 35,
      }
      }}>
      <Tabs.Screen 
      name="Recipes" 
      options={{
        title: 'Recipes',
        tabBarIcon: ({color}) => <BookOpenIcon color={color} style={styles.iconModifier}/>,
      }}
      />
      <Tabs.Screen 
      name="Planner" 
      options={{
        title: 'Planner',
        tabBarIcon: ({color}) => <RootListIcon color={color} style={styles.iconModifier}/>,
      }}
      />
      <Tabs.Screen 
      name="Pantry" 
      options={{
        title: 'Pantry',
        tabBarIcon: ({color}) => <BreadIcon color={color} style={styles.iconModifier}/>
      }}
      />
      <Tabs.Screen name="index"  options={{href: null}}/>
      <Tabs.Screen name="components"  options={{href: null}}/>
    </Tabs>
    </SQLiteProvider>
    
  );
};

const styles = StyleSheet.create({
  iconModifier: {
    transform: [{scale: 1.3}],
  },
});