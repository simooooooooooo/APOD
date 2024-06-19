import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/home";
import Detalle from "../screen/details";

const Stack = createNativeStackNavigator();

const opcionesScreenDefecto = {
  headerStyle: {
    backgroundColor: "black",
  },
  headerTitleStyle: { color: "white", alignment: "center" },
  headerTitleAlign: "center",
};

export default Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} options={opcionesScreenDefecto}/>
        <Stack.Screen name="detalles" component={Detalle} options={opcionesScreenDefecto}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};