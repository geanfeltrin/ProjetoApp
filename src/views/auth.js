import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  AsyncStorage,
  Image,
  KeyboardAvoidingView
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

  signIn = async () => {
    const { email, password } = this.state;
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      this.setState({ isAutenticated: true });
      this.props.navigation.navigate("Main");
    } catch (err) {
      console.log(err);
    }
  };

  empty = () => (
    <View>
      <Text>Preencha os campos </Text>
    </View>
  );

  render() {
    const validations = [];

    validations.push(this.state.email && this.state.email.includes("@"));
    validations.push(this.state.password && this.state.password.length >= 6);

    if (this.state.stageNew) {
      validations.push(this.state.name && this.state.name.trim());
      validations.push(this.state.confirmPassword);
      validations.push(this.state.password === this.state.confirmPassword);
    }

    const validForm = validations.reduce((all, v) => all && v);

    return (
      <KeyboardAvoidingView
        style={styles.background}
        behavior="padding"
        enabled
      >
        <View
          style={{ alignContent: "flex-start", justifyContent: "flex-start" }}
        >
          <Image
            source={icon}
            style={{ width: 120, height: 120, margin: 30 }}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.title}>Projeto Marketing</Text>
        <View style={styles.formContainer}>
          <Text style={styles.subtitle}>Informe seus dados</Text>
          <AuthInput
            icon="at"
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
          <TouchableOpacity onPress={() => this.signIn}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Entrar</Text>
            </View>
          </TouchableOpacity>
          <Text>{this.empty}</Text>
        </View>
      </KeyboardAvoidingView>
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
