import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Alert,
  AsyncStorage,
  AlertIOS,
  Platform,
  ActivityIndicator,
  BackHandler
} from "react-native";
import firebase from "react-native-firebase";
import AuthInput from "../components/Auth/AuthInput";
import icon from "../../assets/img/icone180px.png";

export default class Auth extends Component {
  state = {
    stageNew: false,
    email: "",
    password: "",
    isAutenticated: false
  };
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", function() {
      // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
      // Typically you would use the navigator here to go to the last state.

      return true;
    });
  }

  signIn = async () => {
    const { email, password } = this.state;
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      AsyncStorage.setItem("userData", JSON.stringify(user));
      console.log(user);
      this.props.navigation.navigate("Main", user);
    } catch (err) {
      if (
        err.toString() ==
        "Error: The password is invalid or the user does not have a password."
      ) {
        Platform.OS === "ios"
          ? AlertIOS.alert("Password Incorreto, Digite a senha novamente.")
          : Alert.alert("Password Incorreto, Digite a senha novamente.");
      }
      if (
        err.toString() ==
        "Error: There is no user record corresponding to this identifier. The user may have been deleted."
      ) {
        Platform.OS === "ios"
          ? AlertIOS.alert(
              "Email Incorreto ou inexistente, Digite seu email novamente."
            )
          : Alert.alert(
              "Email Incorreto ou inexistente, Digite seu email novamente."
            );
      }
    }
  };

  render() {
    const validations = [];

    validations.push(this.state.email && this.state.email.includes("@"));
    validations.push(this.state.password && this.state.password.length >= 6);

    const validForm = validations.reduce((all, v) => all && v);

    return (
      <View style={styles.background}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            source={icon}
            style={{
              width: 120,
              height: 120
            }}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.title}>Projeto Marketing</Text>
        <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
          <Text style={styles.subtitle}>Informe seus dados</Text>
          <AuthInput
            icon="envelope"
            placeholder="E-mail"
            style={styles.input}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <AuthInput
            icon="lock"
            secureTextEntry={true}
            placeholder="Senha"
            style={styles.input}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <TouchableOpacity disabled={!validForm} onPress={this.signIn}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Entrar</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF"
  },
  title: {
    fontFamily: "Lato-Regular",
    color: "#00133a",
    fontSize: 30,
    marginBottom: 5
  },
  subtitle: {
    fontFamily: "Lato-Regular",
    color: "#00133a",
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10
  },
  formContainer: {
    backgroundColor: "transparent",
    padding: 10,
    width: "90%"
  },
  input: {
    marginTop: 10,
    fontSize: 20,
    backgroundColor: "#FFF",
    borderBottomWidth: 1
  },
  button: {
    backgroundColor: "#009A5D",
    marginTop: 15,
    padding: 13,
    alignItems: "center"
  },
  buttonText: {
    fontFamily: "Lato-Regular",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  }
});
