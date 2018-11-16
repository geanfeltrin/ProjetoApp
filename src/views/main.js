import React, { Component } from 'react'
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Image, StatusBar} from 'react-native'
import api from '../services/api'
import Cards from '../components/Cards/cards'
import mktlogo from '../../assets/img/mktlogo.png'


export default class Main extends Component{

    static navigationOptions = {
        header:null
    }   
    
    state = {
        boards: [],
          
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

    render(){
        return(
        
            <View style={styles.container}>
                <StatusBar
            backgroundColor="#000F3D"
            barStyle="light-content"
          />
            <View style={styles.containerlogo}>
                <Image source={mktlogo} style={{width:300 ,height: 100}} resizeMode = 'cover'/>
            </View>
                <View style={styles.contentText}>
                <Text style={styles.textTitleSub}>Projetos</Text> 
                </View>
        
             
                  <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.boards}
                    keyExtractor={item=>item.id}
                    renderItem={this.renderItem}
                    /> 
       
            </View>
        )   
    }
}

 const styles = StyleSheet.create({
    container: {
      flexGrow: 1,      
      backgroundColor: '#F1EEFC',
    },
    
    containerlogo:{
        width:'100%',
        height: 100, 
        backgroundColor: "#3AA96C",
        justifyContent:'center',
        alignContent:'center', 
        alignItems:'center'
    },
    textTitleSub: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#000f3d",
        marginStart: 20,
        marginTop: 10,
        fontFamily: 'Lato-Thin',
        
        
     },
   
    
    list:{
        padding:20,
    },
  });
  