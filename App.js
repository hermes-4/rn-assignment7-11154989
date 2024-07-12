import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./components/HomeScreen";
import Cart from "./components/Cart";
import Details from "./components/ProductDetailsScreen";
import { CartProvider } from "./components/Context";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Cart" component={Cart} />
          <Drawer.Screen name="Details" component={Details} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
