import React, { Component } from 'react'
import { View, Text } from 'react-native'
import api from '../services/api'



export default class Boards extends Component{
    state = {
        boards: [],
        members:[]   
    }
    componentDidMount = () => {
        this.loadBoards()
        this.load('yvess')
        
        
    }

    loadBoards = async ()  =>{
        const response = await api.get('members/me/boards')
        this.setState({ boards: response.data })
    }

    load = async (props) =>{
        const response = await api.get(`members/${props}?fields=all`)
        this.setState({ members: response.data })
               
          console.log(this.state.members)
        }


    render(){
        const boards = this.state.boards
        const concluidos =  boards.filter(boards =>{
          
            return boards.closed
        })
        const atividades =  boards.filter(boards =>{
           
            return !boards.closed
        })
        // const idBoard = this.state.members.idBoards
            
        
       
            
        return(
            <View>
                    <Text>Atividades:{atividades.length}</Text>
                    <Text>Concluidos:{concluidos.length}</Text>
                    <Text>{this.state.members.fullName}</Text>
                    {/* <Text>total de boards: {idBoard.length}</Text>  */}
                   
                   
            </View>
 
        )  
     
        
    }
}