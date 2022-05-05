import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

// const address = {require("../assets/Joe.JPG")};
const image = "./assets/Joe.png";

const App = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require(image)}
      resizeMode="cover"
      style={styles.image}
    ></ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000d0",
  },
});

export default App;
