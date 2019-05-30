import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';

class information extends Component{
    render(){
        return(
            <View>
                <Text>HHHHHHHH</Text>
            </View>
        )
    }
}


class datas extends Component{
    render(){
        return(
            <View>
                <Text>kjjjjjj</Text>
            </View>
        )
    }
}

class lineup extends Component{
    render(){
        return(
            <View>
                <Text>nnnnnnn</Text>
            </View>
        )
    }
}
const topNavigator = createMaterialTopTabNavigator({
    information:{
        screen:information,
        navigationOptions:{
            title:'information',
        }
    },
    datas:{
        screen:datas,
        navigationOptions:{
            title:'datas',
        }
    },
    lineup:{
        screen:lineup,
        navigationOptions:{
            title:'lineup'
        }
    }
})

export default createAppContainer(topNavigator);