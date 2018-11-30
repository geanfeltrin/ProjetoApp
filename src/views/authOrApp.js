import React, { Component } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  AsyncStorage
} from "react-native";

export default class AuthOrApp extends Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount = async () => {
    const json = await AsyncStorage.getItem("userData");
    const userData = null;
    console.log(userData);
    // JSON.parse(json) || {};
    if (userData) {
      this.props.navigation.navigate("Main");
    } else {
      this.props.navigation.navigate("Auth");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
