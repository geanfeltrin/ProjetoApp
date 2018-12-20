import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import Icon from "react-native-vector-icons/FontAwesome";
import AudioRecorderPlayer from "react-native-audio-recorder-player";

import ButtonRecord from "../components/ButtonRecord/ButtonRecord";

export default class Record extends Component {
  static navigationOptions = {
    title: "Voltar",
    headerStyle: {
      backgroundColor: "#000000"
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.icon}>
            <Icon name="play" size={30} />
          </View>
          <View style={styles.bar}>
            <Text style={styles.txt}>Áudio 1</Text>
            <ProgressBar
              progress={0.1}
              width={260}
              height={10}
              borderRadius={2}
              borderWidth={1}
              animated={false}
              indeterminate={false}
              color={"#707070"}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.micContent}>
          <ButtonRecord name="md-mic" size={45} style={styles.icon} />
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: "#F3F3F3",
            flexDirection: "row",
            height: 130,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "flex-end"
          }}
        >
          <TouchableOpacity style={styles.micContent}>
            <ButtonRecord name="md-mic" size={45} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#E6E6E6",
    alignContent: "flex-end",
    justifyContent: "flex-end"
  },
  icon: {
    height: 15,
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
    alignContent: "flex-start"
  },
  content: {
    backgroundColor: "#FFFFFF",
    margin: 15,
    height: 90,
    flexDirection: "row"
  },
  bar: {
    flexDirection: "column",
    justifyContent: "center"
  },
  micContent: {
    borderRadius: 50,
    width: 80,
    height: 80,
    backgroundColor: "#F13C3C",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column-reverse",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  txt: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 15,
    fontFamily: "Lato-Thin"
  }
});
