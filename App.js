import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import Cart, { CartProvider } from "./components/Cart"
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductDetailScreen from './components/ProductDetailScreen';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
  //  <CartProvider>
  <NavigationContainer>
     <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name="Home" component={HomeScreen}/>
      {/* <Drawer.Screen name="Cart" component={Cart}/> */}
      <Drawer.Screen name="Details" component={ProductDetailScreen}/>

    </Drawer.Navigator>
    </NavigationContainer>
  //  </CartProvider>
  );
}


const styles = StyleSheet.create({
 
})