import { Redirect } from "expo-router";
import * as SQLite from "expo-sqlite";
import { createRecipeTable } from "./lib";

export default function StartPage() {
  createRecipeTable();
  return <Redirect href="/recipes" />;
}
