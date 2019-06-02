import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import Eastern_Rankings from '../rankings/Eastern'
import Western_Rankings from '../rankings/Western'

const TabNavigator = createMaterialTopTabNavigator({
    East: {
        screen:Eastern_Rankings,
        navigationOptions:{
            title:'Eastern Ranking',
        }
    },
    West: {
        screen:Western_Rankings,
        navigationOptions:{
            title:'Western Ranking',
        }
    },
},{
    swipeEnabled:true,
    animationEnabled:true,
    tabBarOptions:{
        upperCaseLabel:false,
    }
})

export default createAppContainer(TabNavigator);