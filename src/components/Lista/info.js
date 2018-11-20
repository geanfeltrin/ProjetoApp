import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import app from "../../../assets/img/app.png";
import lan from "../../../assets/img/lan.png";
import site from "../../../assets/img/site.png";
import rotina from "../../../assets/img/rotina.png";
import ProgressBar from "react-native-progress/Bar";

export default props => {
  let check = null;
  let bar = null;
  if (props.backgroundColor === "#0079BF") {
    check = (
      <View>
        <Image source={site} style={styles.iconStyle} resizeMode="cover" />
      </View>
    );
    sub = (
      <View>
        <Text style={styles.textSubTitle}>Site</Text>
      </View>
    );
  } else if (props.backgroundColor === "#B04632") {
    check = (
      <View>
        <Image source={lan} style={styles.iconStyle} resizeMode="cover" />
      </View>
    );
    sub = (
      <View>
        <Text style={styles.textSubTitle}>Lançamento</Text>
      </View>
    );
  } else if (props.backgroundColor === "#519839") {
    check = (
      <View>
        <Image source={app} style={styles.iconStyle} resizeMode="cover" />
      </View>
    );
    sub = (
      <View>
        <Text style={styles.textSubTitle}>Aplicativo</Text>
      </View>
    );
  } else if (props.backgroundColor === "#89609E") {
    check = (
      <View>
        <Image source={rotina} style={styles.iconStyle} resizeMode="cover" />
      </View>
    );
    sub = (
      <View>
        <Text style={styles.textSubTitle}>Rotina</Text>
      </View>
    );
  }
  if (props.test >= 0) {
    bar = (
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          margin: 10
        }}
      >
        <ProgressBar
          progress={props.test}
          width={350}
          height={10}
          borderRadius={5}
          borderWidth={1}
          animated={false}
          indeterminate={false}
          color={"#FFF"}
        />
      </View>
    );
  }

  return (
    <View style={{ flexDirection: "column" }}>
      <View style={{ flexDirection: "row" }}>
        {check}
        <View style={styles.contenTitle}>
          <Text style={styles.textTitle}>Projeto: {props.title}</Text>
          {sub}
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around"
        }}
      >
        <View style={styles.GridViewContainer}>
          <Text style={styles.textValor}>{props.atividades}</Text>
          <Text style={styles.textTask}>Atividades</Text>
        </View>
        <View style={styles.GridViewContainer}>
          <Text style={styles.textValor}>{props.execucao}</Text>
          <Text style={styles.textTask}>Em execução</Text>
        </View>

        <View style={styles.GridViewContainer}>
          <Text style={styles.textValor}>{props.completos}</Text>

          <Text style={styles.textTask}>Completos</Text>
        </View>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          margin: 10,
          marginTop: 15,
          flexDirection: "row"
        }}
      >
        {bar}

        <Text
          style={{ color: "#FFF", fontFamily: "Lato-Thin", fontWeight: "bold" }}
        >
          {Math.trunc(props.test * 100)} %
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  iconStyle: {
    width: 100,
    height: 100,
    tintColor: "#fff"
  },
  textTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 25,
    fontFamily: "Lato-Thin"
  },
  textSubTitle: {
    fontSize: 15,
    color: "#F2F2F2",
    fontFamily: "Lato-Italic"
  },

  contenTitle: {
    width: 250
  },
  GridViewContainer: {
    flex: 0.3,
    width: 30,
    height: 40,
    backgroundColor: "transparent",
    alignItems: "center",
    margin: 10,
    marginTop: 0
  },
  textTask: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFF",
    paddingBottom: 10,
    textAlign: "center",
    fontFamily: "Lato-Thin"
  },
  textValor: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFF",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    paddingLeft: 10,
    textAlign: "center",
    fontFamily: "Lato-Thin"
  }
});
