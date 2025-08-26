import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tela1 from "./Telas/Tela1";
import Tela2 from "./Telas/Tela2";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> // Gerenciador de navegação
      <Stack.Navigator initialRouteName="Tela1"> 
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}