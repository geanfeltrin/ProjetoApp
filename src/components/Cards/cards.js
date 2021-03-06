import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import app from "../../../assets/img/app.png";
import lan from "../../../assets/img/lan.png";
import site from "../../../assets/img/site.png";
import rotina from "../../../assets/img/rotina.png";

export default props => {
  let check = null;
  if (props.backgroundColor === "#0079BF") {
    check = (
      <View>
        <Image source={site} style={styles.iconStyle} resizeMode="contain" />
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
        <Image source={lan} style={styles.iconStyle} resizeMode="contain" />
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
        <Image source={app} style={styles.iconStyle} resizeMode="contain" />
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
        <Image source={rotina} style={styles.iconStyle} resizeMode="contain" />
      </View>
    );
    sub = (
      <View>
        <Text style={styles.textSubTitle}>Rotina</Text>
      </View>
    );
  }
  if (props.closed === false) {
    closed = (
      <View style={styles.containerBoards}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: props.backgroundColor,
              width: 70,
              height: 70,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10
            }}
          >
            {check}
          </View>
          <View style={styles.contenTitle}>
            <Text numberOfLines={1} style={styles.textTitle}>
              {props.title}
            </Text>
            {sub}
          </View>
        </View>

        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              marginTop: 14,
              width: "100%",
              height: 5,
              backgroundColor: props.backgroundColor,
              justifyContent: "flex-end",
              alignContent: "flex-end"
            }}
          />
        </View>
      </View>
    );
  } else {
    return null;
  }

  return <View>{closed}</View>;
};

const styles = StyleSheet.create({
  titulo: {
    textAlign: "center"
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 18,
    fontFamily: "Lato-Regular"
  },
  textSubTitle: {
    fontSize: 18,
    marginLeft: 10,
    color: "#999999",
    fontFamily: "Lato-Italic"
  },
  contenTitle: {
    maxWidth: 200
  },
  textDesc: {
    fontSize: 10
  },

  containerBoards: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#dddddd",
    height: 100,

    marginBottom: 20,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 5 },
    shadowRadius: 5
  },
  iconStyle: {
    width: 100,
    height: 100,
    tintColor: "#fff"
  },
  viewSocialStyle: {
    width: 50,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10
  }
});
