import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {

  const { container } = style

  return (
    <View style={container}>
      <Text>Hello</Text>
      <Text>NLW#5</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
