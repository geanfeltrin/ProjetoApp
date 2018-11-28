import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from "react-native";
import axios from "axios";
import AuthInput from "../components/Auth/AuthInput";

export default class Auth extends Component {
  state = {
    stageNew: false,
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  static navigationOptions = {
    header: null
  };

  signin = async () => {
    try {
      const res = await axios.post(`${server}/signin`, {
        email: this.state.email,
        password: this.state.password
      });

      axios.defaults.headers.common["Authorization"] = `bearer ${
        res.data.token
      }`;
      AsyncStorage.setItem("userData", JSON.stringify(res.data));
      this.props.navigation.navigate("Home", res.data);
    } catch (err) {
      Alert.alert("Erro", "Falha no Login!");
      // showError(err)
    }
  };

  signup = async () => {
    try {
      await axios.post(`${server}/signup`, {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      });

      Alert.alert("Sucesso!", "Usuário cadastrado :)");
      this.setState({ stageNew: false });
    } catch (err) {
      showError(err);
    }
  };

  signinOrSignup = () => {
    if (this.state.stageNew) {
      this.signup();
    } else {
      this.signin();
    }
  };

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
      <View style={styles.background}>
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
          <TouchableOpacity disabled={!validForm} onPress={this.signinOrSignup}>
            <View
              style={[
                styles.button,
                !validForm ? { backgroundColor: "#AAA" } : {}
              ]}
            >
              <Text style={styles.buttonText}>
                {this.state.stageNew ? "Registrar" : "Entrar"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() =>
            this.setState({
              stageNew: !this.state.stageNew
            })
          }
        >
          <Text style={styles.buttonText}>
            {this.state.stageNew
              ? "Já possui conta?"
              : "Ainda não possui conta?"}
          </Text>
        </TouchableOpacity>
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
    backgroundColor: "#00133a"
  },
  title: {
    fontFamily: "Lato-italic",
    color: "#FFF",
    fontSize: 30,
    marginBottom: 10
  },
  subtitle: {
    fontFamily: "Lato-Regular",
    color: "#FFF",
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  formContainer: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 20,
    width: "90%"
  },
  input: {
    marginTop: 10,
    backgroundColor: "#FFF"
  },
  button: {
    backgroundColor: "#080",
    marginTop: 10,
    padding: 10,
    alignItems: "center"
  },
  buttonText: {
    fontFamily: "Lato-Regular",
    color: "#FFF",
    fontSize: 20
  }
});
