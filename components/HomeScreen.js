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
import { CartContext } from "./Context";
import { useNavigation } from "@react-navigation/native";
import Header from "./Header";



export default function HomeScreen({navigation}) {

  const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);

    const handleItemPress=(product)=>{
        navigation.navigate("Details", {
          title: product.title,
          image: product.image,
          price: product.price,
          description: product.description

        })
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                  "https://fakestoreapi.com/products?limit=10"
                );
                const products = await response.json();
                
                setProducts(products);
                
                // console.log(products)
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, []);
    mages

    const renderProduct = ({ item }) => (
      <TouchableOpacity key={item.id} style={styles.product} onPress={() => handleItemPress(item)}>
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
        <Header/>
        
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
  product: {
    marginBottom: 20,
    alignItems: "center",
    position:"relative",
    width: "50%"
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
