import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

export default function Details({ route}) {
    // const route = useRoute()
    const { title, image, description,price} = route.params; 
     
  return (
    // <View style={styles.container}>
    //   <Image source={{ uri: product.image }} style={styles.image} />
    //   <Text style={styles.title}>{product.title}</Text>
    //   <Text style={styles.description}>{product.description}</Text>
    //   <Text style={styles.price}>${product.price}</Text>
    // </View>
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Image source={{ uri: image }} style={styles.image} />
       <Text style={styles.description}>{description}</Text>

    <Text style={styles.price}>${price}</Text>
</ScrollView>
  );}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      alignItems: 'center',
      marginBottom: 140
    },
    image: {
      width: 300,
      height: 400,
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      marginVertical: 10,
    },
    price: {
      fontSize: 20,
      color: 'gray',
      textAlign: 'center',
    },
  });
  