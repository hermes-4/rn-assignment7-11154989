import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { CartContext } from "./Context";
import Header from "./Header";
const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Header/>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>${item.price}</Text>
              <TouchableOpacity 
                style={styles.removeButton} 
                onPress={() => removeFromCart(item)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: "row",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "red",
    marginBottom: 10,
  },
  removeButton: {
    backgroundColor: "#FF6347",
    padding: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  emptyText: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
  },
});

export default Cart;
