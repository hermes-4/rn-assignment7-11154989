// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { createContext, useState, useEffect } from "react";


// export const getCart = async()=>{
//   try {
// 	const cart = await AsyncStorage.getItem("Cart")
// 	if (cart == null){
// 	  await AsyncStorage.setItem("cart", JSON.stringify({}))
// 	  return {};
// 	}
// 	return JSON.parse(cart);
//   }catch(error){
// 	return Alert.alert("Error", "An error occured")
//   }
// }

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {

// const [cartItems, setCartItems] = useState(
//   AsyncStorage.getItem("cartItems")
//     ? // ? JSON.parse(AsyncStorage.getItem("cartItems"))
//       []
//     : []
// );

//   useEffect(() => {
//     AsyncStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

 

//   const addToCart = async (item) => {
//     const currentCart = await getCart();

//     // const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

//     const updatedCart = [...currentCart, item];
//     await AsyncStorage.setItem("Cart", JSON.stringify(updatedCart));

//     setCartItems(updatedCart);
//   };

//   const removeFromCart = (item) => {
//     const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

//     if (isItemInCart.quantity === 1) {
//       setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
//     } else {
//       setCartItems(
//         cartItems.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity - 1 }
//             : cartItem
//         )
//       );
//     }
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   const getCartTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         // removeFromCart,
//         // clearCart,
//         // getCartTotal,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
//  };

// import React, { createContext, useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const loadCart = async () => {
//       try {
//         const storedCart = await AsyncStorage.getItem("cart");
//         if (storedCart) {
//           setCartItems(JSON.parse(storedCart));
//         }
//       } catch (error) {
//         console.error("Failed to load cart from storage:", error);
//       }
//     };

//     loadCart();
//   }, []);

//   const addToCart = async (item) => {
//     const newCartItems = [...cartItems, item];
//     setCartItems(newCartItems);
//     await AsyncStorage.setItem("cart", JSON.stringify(newCartItems));
//   };

//   const removeFromCart = async (item) => {
//     const updatedCart = cartItems.filter(cartItem => cartItem.id !== item.id);
//     setCartItems(updatedCart);
//     await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const storedCart = await AsyncStorage.getItem("cart");
        console.log("Stored cart:", storedCart); // Debugging log
        if (storedCart ) {
          setCartItems(JSON.parse(storedCart));
          
        }
      } catch (error) {
        console.error("Failed to load cart from storage:", error);
      }
    };

    loadCart();
  }, []);

  const addToCart = async (item) => {
    const newCartItems = [...cartItems,{...item}];
    setCartItems(newCartItems);
    await AsyncStorage.setItem("cart", JSON.stringify(newCartItems));
  };

  const removeFromCart = async (item) => {
    const updatedCart = cartItems.filter(cartItem => cartItem.id !== item.id);
    setCartItems(updatedCart);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
