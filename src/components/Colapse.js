import React, { Component } from 'react'
import {View, Text, FlatList, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
import api from '../services/api'
import Collapsible from 'react-native-collapsible'
import ProgressBar from 'react-native-progress/Bar'
import Icon from 'react-native-vector-icons/FontAwesome'

export default (props)=>{
    let check = false
    if(props.collapsed === false){
        check=(
        <View>
        <Collapsible collapsed={props.collapsed}>
            <View>
                <Text>
                    test
                </Text>
            </View>
        </Collapsible>   
        </View>
        )
        
    }

    return(
        <View style={styles.containerBoards}>
        <Text style={styles.textBoard}>{props.name} 
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
  
    <TouchableWithoutFeedback onPress={() => props.toggleExpanded}>
        <View>
            <Text >Single Collapsible</Text>
        </View>
  </TouchableWithoutFeedback>

      
    </View>

  </View>
    )

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