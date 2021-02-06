import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello, world test</Text>
        <View style={styles.cyanBox}>
          <Text style={styles.boxtText}>Cyan</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 20
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 40
  },
  safeArea: {
    flex: 1
  },
  cyanBox: {
    backgroundColor: "#2aa198",
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  boxText: {
    color: "white",
    fontWeight: "bold"
  }
});
export default App;
