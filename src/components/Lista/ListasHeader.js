import React,{Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class ListaHeader extends Component {

    render() {

        let check = null
        if(this.props.title === 'A Fazer'){
            check = (
                <View style={[styles.barq,{backgroundColor:'#0079BF'}]}></View>
            )
          
        }else if(this.props.title === 'Em Execução'){
            check = (
                <View>
                <View style={[styles.barq,{backgroundColor:'#89609E'}]}></View>
            </View>
            )            
    
        }else if(this.props.title === 'Pausado'){
            check = (
               <View style={[styles.barq,{backgroundColor:'#e32636'}]}></View>
            
            )           
        }else if(this.props.title === 'Concluído' || 'Concluido'|| 'Concluídos'){
            check = (
               <View style={[styles.barq,{backgroundColor:'#519839'}]}></View>
            
            )           
        }
        
        return(
            <View style={styles.content}>
                
                <Text style={styles.textTitle}>{this.props.title}</Text>
                {check}
                
            <View/> 

            </View>
        )
    }

}

const styles = StyleSheet.create({

    content:{
        flex:1,        
        margin:10,
        paddingBottom: 5,
        marginBottom:5,
        backgroundColor:'#FFF',
        borderRightWidth: 5,
        borderRadius: 2
    },
    textTitle:{
        fontFamily: 'Lato-Thin',
        fontStyle:'normal',
        fontSize: 20,
        fontWeight:'bold',
        marginStart: 10 
    },
    bar:{        
        marginTop:10,
        width: '100%', 
        height: 5,
        backgroundColor: 'green',
        justifyContent:'flex-end',
        alignContent:'flex-end',
        borderRadius: 5,
        borderLeftWidth: 1
    },
    barq:{
        borderLeftWidth: 1,
        borderLeftColor: 'green',
        borderRadius: 3
    }
    

})