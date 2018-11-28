import { createStackNavigator } from "react-navigation";
import Main from "./views/main";
import Lista from "./views/lista";
import Login from "./views/login";

export default createStackNavigator(
  {
    Login,
    Main,
    Lista
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#000f3d"
      },
      headerTintColor: "#fff",

      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "justify"
      }
    }
  }
);
