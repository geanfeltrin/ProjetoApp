import { createStackNavigator } from "react-navigation";
import Main from "./views/main";
import Lista from "./views/lista";

export default createStackNavigator(
  {
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
