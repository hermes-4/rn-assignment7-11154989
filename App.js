// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import HomeScreen from "./components/HomeScreen";
// import { CartProvider } from "./components/Context";
// import Cart from "./components/Cart";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import ProductDetailScreen from "./components/ProductDetailScreen";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen name="Home" component={HomeScreen} 
//       />
//       <Stack.Screen name="Details" component={ProductDetailScreen} />
//     </Stack.Navigator>
//   );
// };

// export default function App() {
//   return (
//     <CartProvider>
//       <NavigationContainer>
//       <Drawer.Navigator initialRouteName="HomeStack">
//         <Drawer.Screen
//           name="HomeStack"
//           component={HomeStack}
//         />
//         <Drawer.Screen name="Cart" component={Cart} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//     </CartProvider>
//   );
// }

// const styles = StyleSheet.create({});



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
