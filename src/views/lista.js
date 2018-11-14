import React,{Component} from 'react'
import {Text, View, SectionList, StyleSheet} from 'react-native'
import api from '../services/api'

class SectionListItem extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.item.name} {this.props.item.id}</Text>
                
            </View>
           
           )

    }
}

class SectionListTitle extends Component{
    render(){
        return(
            <View>
                <Text style={{fontWeight: 'bold'}}>{this.props.section.title}</Text>
                
            </View>
           
           )

    }
}

export default class Lista extends Component{
   state={
        cards:[],
          
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
    const response = await api.get(`boards/${props}/lists?cards=open&card_fields=name&filter=open&fields=name`)

    const cards = response.data.map(card => ({
        title: card.name,
        data: card.cards
    }))

    this.setState({ cards })
}

   
render(){
    const test = this.state.cards
    console.log(test)
      
return(
    <View>            
    <SectionList
        renderItem={({item, index, section}) => <Text key={index}>{item.name}</Text>}
        renderSectionHeader={({section: {title}}) => (
            <Text style={{fontWeight: 'bold'}}>{title}</Text>
        )}
        sections={this.state.cards}
        keyExtractor={(item, index) => item + index}
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


