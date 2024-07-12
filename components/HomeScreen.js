import React, { useState, useEffect, useContext } from "react";

import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";

// import { CartContext } from "./Cart";
import { useNavigation } from "@react-navigation/native";

// const {cartItems, addToCart}= useContext(CartContext)



export default function HomeScreen() {

  const [products, setProducts] = useState([]);
    const navigation = useNavigation();

    const handleItemPress=(product)=>{
        navigation.navigate("Details", product)
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                  "https://fakestoreapi.com/products"
                );
                const products = await response.json();
                
                setProducts(products);
                
                console.log(products)
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, []);


    const renderProduct = ({ item }) => (
      <TouchableOpacity key={item.id} style={styles.productL} onPress={() => handleItemPress(item)}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity style={styles.plus} onPress={() => addToCart(item)}>
          <Image source={require("../assets/Plus.png")} />
        </TouchableOpacity>
      </TouchableOpacity>
    );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Image source={require("../assets/Menu.png")} />
          <View>
            <Image source={require("../assets/Search.png")} />
            <Image source={require("../assets/bag.png")} />
          </View>
        </View>
        <View>
          <Text>OUR STORY</Text>
          <View>
            <Image source={require("../assets/Menu.png")} />

            <Image source={require("../assets/Menu.png")} />
          </View>
        </View>
        <FlatList
        data={products}
          numColumns={2}
          keyExtractor={(product) => product.id.toString()}
          renderItem={renderProduct}
          showsVerticalScrollIndicator={false}
          style={styles.flatlist}
        />
         
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  container: {
    marginHorizontal: 10,
  },
  header: {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
  },
  story: {},
  flatlist: {
    marginBottom: 300,
  },

  plus:{ 
    left: 10,
    position:"absolute"
  },
  productL: {
    marginBottom: 20,
    alignItems: "center",
    position:"relative",
    width: "50%"
  },
  productR: {
    marginBottom: 20,
    alignItems: "center",
    width: "47%",
  },
  image: {
    width: 150,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "red",
    alignSelf:"left"
  },
});
