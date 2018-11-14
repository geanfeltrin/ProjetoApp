import React, { Component } from 'react'
import {View, Text, FlatList, StyleSheet, TouchableOpacity, SectionList} from 'react-native'
import api from '../services/api'
import ProgressBar from 'react-native-progress/Bar'
import Icon from 'react-native-vector-icons/FontAwesome'
import Collapsible from 'react-native-collapsible'


export default class CardsList extends Component{

    state = {
        boards: [],
          
    }
    static navigationOptions = {
        title: "Lista de Projetos"
    } 
    componentDidMount = () => {
        this.loadBoards()              
        
    }

    loadBoards = async ()  =>{
        const response = await api.get('members/me/boards')
        const boards = response.data.map(boards => ({
            title: boards.name,
            backgroundColor: boards.prefs.backgroundColor
        }))

        this.setState({ boards })
        console.log(this.state.boards)
    }
  
   
    renderItem = ({ item }) => (
       
        <View style={styles.containerBoards}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate( 'Lista' , {  itemId: item
              })}>
              <Text style={styles.textTitle}>{item.title} </Text>
              <View style={{width: '100%', height: 5, backgroundColor:item.backgroundColor}}/>     
        </TouchableOpacity>  
       </View>
       
        
      
   
        
    )

    renderSeparator = () =>(
        <View 
        sytle={{ height:10, width: '100%' , backgroundColor:'black'

        }}></View>
    )
  

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textTitleP}>Marketing</Text>
                <Text style={styles.textTitleSub}>Projetos</Text>          
                 <FlatList
                     contentContainerStyle={styles.list}
                    data={this.state.boards}
                    extraData={this.state.collapsed}
                    keyExtractor={item=>item.id}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.renderSeparator}
                    />
       
            </View>
        )   

    }
}

 const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  
    textTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333333",
        justifyContent: "center",
        textAlign: "center",
        paddingBottom: 20,
        marginBottom: 5,
    },
    textTitleP: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#000F3D",
        justifyContent: "center",
        alignItems: "center",
      
    },
    
    list:{
        padding:20,
    },

    containerBoards:{
        paddingTop:20,        
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#dddddd",
        marginBottom: 20

    },
  
 content: {
        flex:1,
        padding: 20,
        
      },
      textTitleSub:{
          textAlign: 'center',
          color: '#009A5D',
          fontSize:20
        
      }
  });
  