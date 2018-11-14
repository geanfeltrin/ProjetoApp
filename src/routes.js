import {createStackNavigator} from 'react-navigation'
import Main from './views/main'
import Lista from './views/lista'
import Card from './views/boards'

export default createStackNavigator ({
    Main,
    Card,
    Lista
},{
    navigationOptions:{
        headerStyle:{
            backgroundColor: '#add8e6',
        },
        headerTintColor: '#fff',
        
        headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'justify',
       
                
    },  

    }
}
    

)