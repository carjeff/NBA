import React,{Component} from 'react';
import {View,Text,Dimensions,StyleSheet,FlatList,ScrollView} from 'react-native';
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import teamdata from '../teamdata/teamdata';
import playerinfo from '../teamdata/playerdata';
import team from '../assets/team_map'

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
                <View style={{flexDirection:'row'}}>
                    <View style={{width:width/3}}>
                        <Text>Coach:</Text>
                    </View>
                    <Text>{playerinfo[this.state.name].basic.resultSets[1].rowSet[0][5]}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:width/3}}>
                        <Text>Conference:</Text>
                    </View>
                    <Text>{team[this.state.name].conf}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:width/3}}>
                        <Text>City:</Text>
                    </View>
                    <Text>{team[this.state.name].city}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:width/3}}>
                        <Text>Founding time:</Text>
                    </View>
                    <Text>Mike broden</Text>
                </View>
            </View>
        )
    }
}


class datas extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:this.props.screenProps.name,
        }
    }
    render(){
        return(
            <ScrollView>
                <View style={{flexDirection:'row',marginLeft:5}}>
                    <View style={{width:width/4.5,flexDirection:'column'}}>
                        <Text>Season</Text>
                        <Text>2018-19</Text>                        
                    </View>
                    <View style={{width:width/4.5}}>
                        <Text>Data</Text>                        
                    </View>
                    <View style={{width:width/4.5}}>
                        <Text>Average</Text>                        
                    </View>
                    <View style={{width:width/4.5}}>
                        <Text>Max</Text>
                    </View>
                    <View style={{width:width/4.5}}>
                        <Text>Rank</Text>
                    </View>   
                </View>
                {playerinfo[this.state.name].info.resultSets[0].rowSet[0].map((element,index) => {
                    if(index>=4&&index<=29){
                        return(
                            <View style={{flexDirection:'row',marginLeft:5}}>
                                <View style={{width:width/4.5}}>
                                    <Text>{playerinfo[this.state.name].info.resultSets[0].headers[index]}</Text>                        
                                </View>
                                <View style={{width:width/4.5}}>
                                    <Text>{element}</Text>                        
                                </View>
                                <View style={{width:width/4.5}}>
                                    <Text>{teamdata['average'][0]}</Text>                        
                                </View>
                                <View style={{width:width/4.5}}>
                                    <Text>{teamdata['max'][0]}</Text>
                                </View>
                                <View style={{width:width/4.5}}>
                                    <Text>{playerinfo[this.state.name].info.resultSets[0].rowSet[0][index+26]}</Text>   
                                </View>
                            </View>                                               
                        )
                    }
            })}                                 

            </ScrollView>
        )
    }
}

class lineup extends Component{
    constructor(props){
        super(props)
        this.state={
            name:this.props.screenProps.name,
            info:[]
        }
    }
    render(){
        return(
            <ScrollView >
                <View style={{flexDirection:'row'}}>
                    <View style={{width:width/3,justifyContent:'center'}}>
                        <Text>name</Text>
                    </View>
                    <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Text></Text>
                    </ScrollView>

                </View>
                {playerinfo[this.state.name].info.resultSets[1].rowSet.map((element,index)=>{
                            return(
                                <View style={{flexDirection:'row'}}>
                                    <View style={{width:width/3,flexDirection:'column'}}>
                                        <Text>{element[2]}</Text>
                                    </View>
                                    <ScrollView 
                                        horizontal={true}
                                        keyboardDismissMode={"on-drag"}
                                        showsHorizontalScrollIndicator={false}
                                    >
                                        <View style={{flexDirection:'row'}}>
                                            <Text>{element[3]}</Text>                                            
                                            <Text>{element[3]}</Text>                                            
                                            <Text>{element[3]}</Text>                                            
                                            <Text>{element[3]}</Text>                                            
                                            <Text>{element[3]}</Text>  
                                            <Text>{element[3]}</Text>                                            
                                            <Text>{element[3]}</Text>                                            
                                            <Text>{element[3]}</Text>                                            
                                            <Text>{element[3]}</Text>                                            
                                            <Text>{element[3]}</Text> 
                                            <Text>{element[3]}</Text>                                            
                                            <Text>{element[3]}</Text>                                            
                                            <Text>{element[3]}</Text>                                            
                                            <Text>{element[3]}</Text>                                            
                                            <Text>{element[3]}</Text> 
                                            <Text>{element[3]}</Text>                                            
                                            <Text>{element[3]}</Text>                                            
                                            <Text>{element[3]}</Text>                                            
                                            <Text>{element[3]}</Text>                                            
                                            <Text>{element[3]}</Text>                                              
                                        </View>
                                         
                                    </ScrollView>
                                </View>
                            )                            

                })}
            </ScrollView>
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