import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default props => {
  return (
    <View style={styles.container}>
      <Icon name={props.name} size={props.size} color="white" />
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  }
});
