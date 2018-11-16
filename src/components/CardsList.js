import React, { Component } from 'react'
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Image} from 'react-native'
import api from '../services/api'
import ProgressBar from 'react-native-progress/Bar'
import Icon from 'react-native-vector-icons/FontAwesome'
import Collapsible from 'react-native-collapsible'
import app from '../../assets/img/app.png'
import lan from '../../assets/img/lan.png'
import site from '../../assets/img/site.png'
import Cards from './Cards/cards'
import logo from '../../assets/img/logo.png'

// class Test extends Component{
//     render(){
//       const check = 
//         if(this.props.backgroundColor==='#0079BF')
//         return site
//         else(this.props.backgroundColor==='#89609E')
//         return app
//     }
// }

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
            id: boards.id,
            backgroundColor: boards.prefs.backgroundColor
        }))

        this.setState({ boards })
        console.log(this.state.boards)
    }
  
   
    renderItem = ({ item }) => (
        <View>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate( 'Lista' , {  itemId: item
              })}>

        <Cards backgroundColor={item.backgroundColor} title={item.title}/>
                
        </TouchableOpacity>  
       </View>        
    )

    // renderSeparator = () =>(
    //     <View 
    //     sytle={{ height:10, width: '100%' , backgroundColor:'black'

    //     }}></View>
    // )
  

    render(){
        return(
            <View style={styles.container}>
            <View style={{width:'100%' ,height: 100, backgroundColor: "#000f3d", justifyContent:'center'}}>
                <Image source={logo} style={{width:200 ,height: 100}}/>
            </View>
                <Text style={styles.textTitleP}>Marketing</Text>
                <Text style={styles.textTitleSub}>Projetos</Text> 
                
                  
             
                  <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.boards}
                    keyExtractor={item=>item.id}
                    renderItem={this.renderItem}
                    // ItemSeparatorComponent={this.renderSeparator}
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
      backgroundColor: '#F1EEFC',
    },
  
    textTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333333",
        justifyContent: "center",
        textAlign: 'left',
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
    textTitleSub: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#3AA96C",
        justifyContent: "center",
        alignItems: "center",
      
    },
    
    list:{
        padding:20,
    },

content: {
        flex:1,
        padding: 10,
 },


  });
  