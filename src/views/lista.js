import React,{Component} from 'react'
import {Text, View} from 'react-native'
import Boards from '../components/Boards';



export default class Lista extends Component{
   state={
       list:[]
   }

navigationOptions = ({ navigation }) => ({
    title: navigation.props.params.lista.name
})
   
    render(){
       return(
        <View>
            <Text>Test</Text>
        </View>
       )
        
   }

}





