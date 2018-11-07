import React from 'react'
import { View, Text,StyleSheet } from 'react-native'


export default props =>
(
    <View>
        <Text style={styles.titulo}>{props.name}</Text>
        {/* <Text style={styles.lista}>{props.name}</Text> */}
    </View>

)    


const styles = StyleSheet.create({
    titulo:{
        textAlign: 'center'
    },
    lista:{
        textAlign: 'auto'
    }
})