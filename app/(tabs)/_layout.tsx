import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen name="recipes" />
      <Tabs.Screen name="stock" />
    </Tabs>
  );
};
