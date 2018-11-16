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
            backgroundColor: '#000f3d',
        },
        headerTintColor: '#fff',
        
        headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'justify',
       
                
    },  

    }
}
    

)