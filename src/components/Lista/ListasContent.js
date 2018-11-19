import React,{Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import IconT from 'react-native-vector-icons/AntDesign'

export default class ListaContent extends Component {

    render() {
        let check = null
        if(this.props.title === 'A Fazer'){
            check = (
                <Icon name={'dot-single'} size={30} />
            )
          
        }else if(this.props.title === 'Em Execução'){
            check = (
                <Icon name={'dot-single'} size={30} />
            )            
    
        }else if(this.props.title === 'Pausado'){
            check = (
                <IconT name={'pause'} size={30} color={'#e32636'} />
            
            )           
        }else if(this.props.title === 'Concluído'){
            check = (
                <Icon name={'check'} size={30} color={'green'}/>
            
            )           
        }
        return(
            <View style={styles.content}>
                {check}
                    <Text key={this.props.index} style={styles.text}>{this.props.name}</Text>         
            </View>
        )
    }

}

const styles = StyleSheet.create({

    content:{
        flex:1,
        flexDirection:'row',
        borderBottomWidth: 1,
        padding:10,        
        marginLeft:20,
        marginRight:20,
        backgroundColor: 'white',
        alignItems: 'center',
        
    },
    text:{
        marginStart: 10,
        marginEnd:20,
        fontWeight:'bold',        
        fontFamily: 'Lato-Thin',
        fontSize: 15,
       
    }

    

})