import { Tabs } from "expo-router";
import {SQLiteProvider} from "expo-sqlite";
import {initDatabase} from "./database";
import {Colors, TextSize} from "./theme";
import { BookOpenIcon, RootListIcon, BreadIcon } from "tdesign-icons-react-native";
import { StyleSheet } from "react-native";
import { useFonts, AveriaSerifLibre_400Regular, AveriaSerifLibre_700Bold } from '@expo-google-fonts/averia-serif-libre';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  let [fontsLoaded] = useFonts({
    AveriaSerifLibre_400Regular,
    AveriaSerifLibre_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    
    <SQLiteProvider databaseName="kitchen.db" onInit={initDatabase}>
    <Tabs screenOptions={{
      headerShown: false, 
      tabBarActiveTintColor: Colors.important, 
      tabBarInactiveTintColor: Colors.lesser,
      tabBarLabelStyle:{
        fontSize: TextSize.small,

      },
      tabBarStyle:{
        height: 91,
        paddingTop: 5,
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