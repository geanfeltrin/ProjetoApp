import { createStackNavigator } from "react-navigation";
import AuthOrApp from "./views/authOrApp";
import Main from "./views/main";
import Lista from "./views/lista";
import Auth from "./views/auth";
import Record from "./views/record";

export default createStackNavigator(
  {
    Record,
    AuthOrApp,
    Auth,
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
