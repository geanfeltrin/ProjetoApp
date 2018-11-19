import React from 'react'
import { View, Image , StyleSheet, Text } from 'react-native'
import app from '../../../assets/img/app.png'
import lan from '../../../assets/img/lan.png'
import site from '../../../assets/img/site.png'
import Icon from 'react-native-vector-icons/FontAwesome'



export default props =>{
    let check = null
    if(props.backgroundColor === '#0079BF'){
        check = (
            <View>
                <Image source={site} style={styles.iconStyle} resizeMode = 'cover'/>
            </View>
        )
      
    }else if(props.backgroundColor === '#89609E'){
        check = (
            <View>
            <Image source={lan} style={styles.iconStyle} resizeMode = 'cover'/>
        </View>
        )
        

    }else if(props.backgroundColor === '#519839'){
        check = (
            <View>
            <Image source={app} style={styles.iconStyle} resizeMode = 'cover'/>
        </View>
        )
       
    }

      
return (
 <View style={{flexDirection:"column"}}>
  
        <View style={{flexDirection:'row'}}>
                {check}          
            <View style={styles.contenTitle} >
                <Text style={styles.textTitle}>Projeto: {props.title}</Text>
            </View>
        </View>
        
        <View style={{flexDirection:'row',width:'100%',justifyContent:'space-around'}}>
            <View style={styles.GridViewContainer}>
                    <Text style={styles.textValor}>{props.atividades}</Text>
                    <Text style={styles.textTask}>
                        Atividades
                    </Text>        
            </View>
            <View style={styles.GridViewContainer}>
                <Text style={styles.textValor}>{props.completos}</Text>
                 <View style={{flexDirection:'row'}}>
                <Icon name="check" color="green" size={20}/>
                   <Text style={styles.textTask}>
                            Completos
                    </Text>
                    </View>
            </View>
            <View style={styles.GridViewContainer}>
                  <Text style={styles.textValorDays}>3</Text>
                  <Text style={styles.textTask}>
                      Days left
                  </Text>    
              </View>
          


        </View> 

  </View>     
   
    )
        
}
const styles = StyleSheet.create({

iconStyle: {
    width: 100,
    height: 100,
    tintColor:'#fff',

},
textTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight:'bold',         
    marginTop: 35,
    fontFamily: 'Lato-Thin'
},
contenTitle:{
    width: 250, 
    height: 50,
},
GridViewContainer:{
    flex:0.3,
    width: 30,
    height: 40,
    backgroundColor: 'transparent',
    marginBottom: 20,
    alignItems:'center',
    marginStart: 10,
},
textTask:{
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFF",
    paddingBottom: 10,
    textAlign: "center",
    fontFamily: 'Lato-Thin'
},
textValor:{
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFF",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    paddingLeft:10,
    textAlign: "center",
    fontFamily: 'Lato-Thin'
    
    },
    textValorDays:{
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    textAlign: "center",
    fontFamily: 'Lato-Thin'
    }

   
})