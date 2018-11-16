import React, {Component} from 'react'
import {View, Text, ImageBackground, Image} from 'react-native'
import CardsList from '../components/CardsList';


export default class Main extends Component {
   
    static navigationOptions = {
        header:null
  };

    

    render(){
        return(
            <View>
           <CardsList/>
           
            
                            
            </View>

        )           

    }

}
