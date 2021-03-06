import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default props => {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name={props.icon} size={21} style={styles.icon} />
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "#EEE",
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    color: "#333",
    marginLeft: 20
  },
  input: {
    marginLeft: 20,
    width: "70%",
    fontSize: 18,
    fontFamily: "Lato-Italic"
  }
});
