import React,{Component} from 'react'
import {Text, View, FlatList, StyleSheet} from 'react-native'
import Boards from '../components/Boards'
import api from '../services/api'
import {Filho} from '../components/Cards/lists'
// import Cards from '../components/Cards/cards'



export default class Lista extends Component{
   state={
        cards:{},
        
  
   }
   
static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('itemId')
    return{
        title: title.name
    }
}

componentDidMount = () => {
    const id = this.props.navigation.getParam('itemId')
    const test = id.id
    this.loadCards(test)
}

loadCards = async (props) =>{
    console.log(props)
    const response = await api.get(`boards/${props}?cards=all&lists=all&list_field=id,name`)
    this.setState({ cards: response.data })
    console.log(response.data)

}
 

   
    render(){
    const {cards , lists} = this.state.cards
    
    console.log(cards)

       return(
            <View><Text>Tes</Text>
                
                </View>
      )
}
}


const styles = StyleSheet.create({
    list:{
        padding: 10
    }
   
})


