import React,{Component} from 'react'
import {Text, View, FlatList, StyleSheet} from 'react-native'
import Boards from '../components/Boards'
import api from '../services/api'
// import Cards from '../components/Cards/cards'



export default class Lista extends Component{
   state={
        cards:{},
        lista:{ id: 'nome', nome:{ endereço: 'a',
    }}
        
       
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
    const response = await api.get(`boards/${props}?cards=all`)
    this.setState({ cards: response.data })
    console.log(response.data)

}

 renderItem = ({item})=> (
     <View>
         <Text>{item.name}</Text>
     </View>
 )


   
    render(){
       const cards = this.state.cards.cards
       console.log(cards)
    return(
        <View>
            <FlatList 
            data={cards}
            keyExtractor={item=>item.id}          
            renderItem={this.renderItem}
             />
        </View>
       )
        
   }

}


const styles = StyleSheet.create({
    list:{
        padding: 10
    }
   
})


