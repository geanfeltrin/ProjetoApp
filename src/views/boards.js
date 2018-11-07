import React, { Component } from 'react'
import {View, Text, FlatList, StyleSheet, TouchableOpacity,ToastAndroid} from 'react-native'
import api from '../services/api'
import ProgressBar from 'react-native-progress/Bar'
import Icon from 'react-native-vector-icons/FontAwesome'
import Collapsible from 'react-native-collapsible'




export default class CardsList extends Component{

    state = {
        boards: [],
        collapsed: true
    
    }
    static navigationOptions = {
        title: "Lista de Projetos"
    }   
    componentDidMount = () => {
        this.loadBoards()              
        
    }

    loadBoards = async ()  =>{
        const response = await api.get('members/me/boards')
        this.setState({ boards: response.data })
    }

    loadCards = async (props) =>{
        const response = await api.get(`boards/${props}?cards=visible&card_member_fields=all`)
        this.setState({ cards: response.data })
        console.log('test')
    }

    toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
        console.log(this.state.collapsed)
      };

     renderItem = ({ item }) => (
       
         <View style={styles.containerBoards}>
         <TouchableOpacity onPress={()=> this.props.navigation.navigate( 'Lista' , {  itemId: item
               })}>
               <Text style={styles.textBoard}>{item.name} 
              </Text>
            
           <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.GridViewContainer}>
                  <Text style={styles.textValor}>10</Text>
                  <Text style={styles.textTask}>
                      Atividades
                  </Text>        
              </View>
              <View style={styles.GridViewContainer}>
                  <Text style={styles.textValor}>5</Text>
                
                  <Text style={styles.textTask}>
                  <Icon name="check" color="green"/>Completos
                  </Text>
                
                  </View>
              <View style={styles.GridViewContainer}>
                  <Text style={styles.textValorDays}>3</Text>
                  <Text style={styles.textTask}>
                      Days left
                  </Text>    
              </View>
          </View>
        
          <ProgressBar progress={0.3} width={null} height={15} borderRadius={5} borderWidth={1} animated={true} />
       
          <View>
       
         {/* <TouchableOpacity onPress={() => this.props.navigation.navigate("Lista", { lista: item })}>
           <View>
             <Text >Single Collapsible</Text>
           </View>
         </TouchableOpacity> */}
         <View>
         </View>
         <View>
       
        </View>
         
        </View>
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
    textBoard: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333333",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10,
        marginBottom: 5,
    },
    
    list:{
        padding:20,
    },
    buttonVisible:{
        height:42,
        borderRadius:5,
        borderWidth:2,
        borderColor: "#DA552F",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10 
    },
    containerBoards:{
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#dddddd",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20

    },
    GridViewContainer:{
        flex:0.3,
        width: 10,
        backgroundColor: 'transparent',
        padding:0
    },
    textTask:{
        fontSize: 15,
        fontWeight: "bold",
        color: "#333333",
        paddingBottom: 10,
        textAlign: "center"
    },
    textValor:{
        fontSize: 18,
        fontWeight: "bold",
        color: "gray",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        paddingLeft:10,
        textAlign: "center"
     },
     textValorDays:{
        fontSize: 18,
        fontWeight: "bold",
        color: "green",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        textAlign: "center"
     },
     content: {
        flex:1,
        padding: 20,
        
      },
  });
  