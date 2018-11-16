import React from 'react'
import { View, Image , StyleSheet } from 'react-native'
import app from '../../../assets/img/app.png'
import lan from '../../../assets/img/lan.png'
import site from '../../../assets/img/site.png'


export default props =>{
    let check = null
    if(props.backgroundColor === '#0079BF'){
        check = (
            <View>
                <Image source={site} style={{width: 100, height: 70, alingItem:'center'}}/>
            </View>
        )
    }else if(props.backgroundColor === '#89609E'){
        check = (
            <View>
            <Image source={lan} style={{width: 100, height: 70,alingItem:'center'}}/>
        </View>
        )

    }else if(props.backgroundColor === '#519839'){
        check = (
            <View>
            <Image source={app} style={{width: 100, height: 70,alingItem:'center'}}/>
        </View>
        )
    }
    
return (
    <View>{check}</View>
    
        )
        
}


const styles = StyleSheet.create({
    titulo:{
        textAlign: 'center'
    },
    lista:{
        textAlign: 'auto'
    }
})