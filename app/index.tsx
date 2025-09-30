import { Redirect } from "expo-router";
import * as SQLite from "expo-sqlite";

export default function StartPage() {
  return <Redirect href="/Recipes" />;
}
