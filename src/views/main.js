import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Animated,
  ImageBackground
} from "react-native";
import api from "../services/api";
import Cards from "../components/Cards/cards";

import headerlogo from "../../assets/img/header.png";

export default class Main extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    boards: [],
    loadingProgress: new Animated.Value(0),
    refreshing: false
  };
  componentDidMount = () => {
    this.loadBoards();
    Animated.timing(this.state.loadingProgress, {
      toValue: 100,
      duration: 2000
    }).start();
  };

  loadBoards = async () => {
    const response = await api.get("members/me/boards");
    const boards = response.data.map(boards => ({
      title: boards.name,
      id: boards.id,
      backgroundColor: boards.prefs.backgroundColor,
      closed: boards.closed
    }));

    this.setState({ boards, refreshing: false });
  };

  handleRefresh = () => {
    this.setState({ refreshing: true });
    this.loadBoards();
  };

  renderItem = ({ item }) => (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: this.state.loadingProgress.interpolate({
                inputRange: [0, 100],
                outputRange: [50, 0]
              })
            }
          ],
          opacity: this.state.loadingProgress.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1]
          })
        }
      ]}
    >
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("Lista", { itemId: item })
        }
      >
        <Cards
          backgroundColor={item.backgroundColor}
          title={item.title}
          closed={item.closed}
        />
      </TouchableOpacity>
    </Animated.View>
  );

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#00133a" barStyle="light-content" />
        <View style={styles.containerlogo}>
          <ImageBackground
            source={headerlogo}
            style={{ width: "100%", height: 100 }}
            resizeMode="center"
          />
        </View>
        <View style={styles.contentText}>
          <Text style={styles.textTitleSub}>PROJETOS</Text>
        </View>

        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.boards}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1EEFC",
    marginBottom: 5
  },

  containerlogo: {
    width: "100%",
    height: 200,
    backgroundColor:"#000f3d"
    
    
    
  },
  textTitleSub: {
    fontSize: 20,
    // fontWeight: "bold",
    color: "#000f3d",
    marginStart: 20,
    marginTop: 20,
    fontFamily: "Lato-Regular"
  },

  list: {
    padding: 20
  }
});
