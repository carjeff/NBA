import React,{Component} from 'react';
import {View,Text,Dimensions} from 'react-native';
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import teamdata from '../teamdata/teamdata'

const width=Dimensions.get('window').width;
const height = Dimensions.get('window').height;
class information extends Component{
    constructor(props){
        super(props)
            this.state = {
                name: this.props.screenProps.name,
                datas: []
            }
    }

    render(){
        return(
            <View>
                <Text>HHHHHHHH</Text>
                <Text>{this.state.name}</Text>
                <Text>{teamdata.resultSets[0].name}</Text>
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
        screen: information,
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
            title:'lineup',
        }
    }
},{
    swipeEnabled:true,
    animationEnabled:true
})

const Ap = createAppContainer(topNavigator);
export default Team = (props) => {
    return <Ap screenProps={{name: props.name}}/>
} 