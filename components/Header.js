import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Header(){
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image source={require("../assets/Menu.png")}></Image>
        </TouchableOpacity>
        <Image source={require("../assets/Logo.png")} height={30} width={30} />
        <View style={styles.options}>
          <TouchableOpacity
            source={require("../assets/Search.png")}
          ></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Image source={require("../assets/bag.png")}/>
          </TouchableOpacity>
        </View>
        <View style={[styles.header, { marginTop: 20 }]}>
          <Text style={styles.greeting}>OUR STORY</Text>
          <View style={styles.options}>
            <TouchableOpacity>
              <Image source={require("../assets/Listview.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("../assets/Filter.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    options: {
        width: "30%",
        justifyContent: "space-evenly",
        flexDirection: "row",
        marginBottom: 8,
      },header: {
        flexDirection: "row",
        width: "100%",
        fontFamily: Fonts.primary,
        justifyContent: "space-between",
      },image: {
        width: 30,
        height: 30,
        margin: 10
    }, filter: {
        height: 40,
        width: 38,
      },
      greeting: {
        fontSize: 28,
        color: "black",
        fontFamily: Fonts.primary,
      },
})