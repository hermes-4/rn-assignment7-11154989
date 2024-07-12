// import React, { useContext, useEffect, useState } from "react";
// import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
// import { CartProvider } from "./Context";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const Cart = () => {
//   const { cartItems, setCartItems } = useContext(CartProvider);
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const storedCart = await AsyncStorage.getItem("cart");
//         if (storedCart) {
//           setItems(JSON.parse(storedCart));
//         }
//       } catch (error) {
//         Alert.alert("Error", "An error occurred while fetching cart items");
//       }
//     };

//     fetchCartItems();
//   }, [cartItems]);

//   const removeFromCart = async (item) => {
//     const updatedCart = items.filter(cartItem => cartItem.id !== item.id);
//     setItems(updatedCart);
//     setCartItems(updatedCart);
//     await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Your Cart</Text>
//       {items.length > 0 ? (
//         items.map(item => (
//           <View key={item.id} style={styles.cartItem}>
//             <Image source={{ uri: item.image }} style={styles.image} />
//             <View style={styles.details}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.price}>${item.price}</Text>
//               <TouchableOpacity 
//                 style={styles.removeButton} 
//                 onPress={() => removeFromCart(item)}
//               >
//                 <Text style={styles.removeButtonText}>Remove</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         ))
//       ) : (
//         <Text style={styles.emptyText}>Your cart is empty.</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   cartItem: {
//     flexDirection: "row",
//     marginBottom: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//     paddingBottom: 10,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginRight: 20,
//   },
//   details: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   price: {
//     fontSize: 16,
//     color: "red",
//     marginBottom: 10,
//   },
//   removeButton: {
//     backgroundColor: "#FF6347",
//     padding: 10,
//     borderRadius: 5,
//   },
//   removeButtonText: {
//     color: "#fff",
//     textAlign: "center",
//   },
//   emptyText: {
//     textAlign: "center",
//     fontSize: 18,
//     marginTop: 20,
//   },
// });

// export default Cart;



import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { CartContext } from "./Context";
const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
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
