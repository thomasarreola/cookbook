import { Redirect } from "expo-router";
import * as SQLite from "expo-sqlite";
import * as FileSystem from 'expo-file-system';

console.log("Database folder:", FileSystem.documentDirectory + 'SQLite');

export default function StartPage() {
  return(
    
        <Redirect href="/Recipes" />
    
  
);
}
