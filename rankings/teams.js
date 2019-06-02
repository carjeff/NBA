import React,{Component} from 'react';
import {View,Text,Dimensions,StyleSheet,ScrollView} from 'react-native';
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import teamdata from '../teamdata/teamdata';
import playerinfo from '../teamdata/playerdata';
import team from '../assets/team_map'

const width=Dimensions.get('window').width;
const height = Dimensions.get('window').height;
class information extends Component{
    static tabBarOptions = ({navigation,screenProps})=>({
        tabStyle:{
            backgroundColor:team[screenProps.name]
        }
    })
    constructor(props){
        super(props)
            this.state = {
                name: this.props.screenProps.name,
                datas: []
            }
    }

    render(){
        return(
            <View style={{marginTop:20}}>
                <View style={{flexDirection:'row',margin:5}}>
                    <View style={styles.data}>
                        <Text style={styles.text}>Coach:</Text>
                    </View>
                    <Text style={[styles.text,{fontWeight:'bold'}]}>{playerinfo[this.state.name].basic.resultSets[1].rowSet[0][5]}</Text>                        
                </View>
                <View style={{flexDirection:'row',margin:5}}>
                    <View style={styles.data}>
                        <Text style={styles.text}>Conference:</Text>
                    </View>
                    <Text style={[styles.text,{fontWeight:'bold'}]}>{team[this.state.name].conf}</Text>
                </View>
                <View style={{flexDirection:'row',margin:5}}>
                    <View style={styles.data}>
                        <Text style={styles.text}>City:</Text>
                    </View>
                    <Text style={[styles.text,{fontWeight:'bold'}]}>{team[this.state.name].city}</Text>
                </View>
                <View style={{flexDirection:'row',margin:5}}>
                    <View style={styles.data}>
                        <Text style={styles.text}>Founding time:</Text>
                    </View>
                    <Text style={[styles.text,{fontWeight:'bold'}]}>{team[this.state.name].time}</Text>
                </View>
                <View style={{flexDirection:'row',margin:5}}>
                    <View style={styles.data}>
                        <Text style={styles.text}>Home stadium:</Text>
                    </View>
                    <Text style={[styles.text,{fontWeight:'bold'}]}>{team[this.state.name].stadium}</Text>
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
                <View style={{flexDirection:'row',marginLeft:5,marginTop:10}}>
                    <View style={{width:width/3,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Season</Text>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>2018-19</Text>                        
                    </View>
                    <View style={{width:width/3,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Data</Text>                        
                    </View>
                    <View style={{width:width/3,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Rank</Text>
                    </View>   
                </View>
                {playerinfo[this.state.name].info.resultSets[0].rowSet[0].map((element,index) => {
                    if(index>=4&&index<=29){
                        return(
                            <View style={{flexDirection:'row',margin:3}}>
                                <View style={{width:width/3,alignItems:'center'}}>
                                    <Text>{playerinfo[this.state.name].info.resultSets[0].headers[index]}</Text>                        
                                </View>
                                <View style={{width:width/3,alignItems:'center'}}>
                                    <Text>{element}</Text>                        
                                </View>
                                <View style={{width:width/3,alignItems:'center'}}>
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
            <View style={{flexDirection:'row',margin:5}}>
                <View style={{margin:5}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>name</Text>
                    {playerinfo[this.state.name].basic.resultSets[0].rowSet.map((element,index)=>{
                        return(

                            <View style={{flexDirection:'column',marginBottom:5}}>
                                <Text>{element[3]}</Text>                                            
                            </View>                                                     
                    )                            
                    })}                    
                </View>
               
                <ScrollView 
                    horizontal={true}
                    keyboardDismissMode={"on-drag"}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{margin:6}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{width:width/5,alignItems:'center',fontSize:20,fontWeight:'bold'}}>Number</Text>
                            <Text style={{width:width/5,alignItems:'center',fontSize:20,fontWeight:'bold'}}>Position</Text>
                            <Text style={{width:width/5,alignItems:'center',fontSize:20,fontWeight:'bold'}}>Age</Text>
                            <Text style={{width:width/5,alignItems:'center',fontSize:20,fontWeight:'bold'}}>Height</Text>
                            <Text style={{width:width/5,alignItems:'center',fontSize:20,fontWeight:'bold'}}>Weight</Text>
                            <Text style={{width:width/3,alignItems:'center',fontSize:20,fontWeight:'bold'}}>School</Text>
                            <Text style={{width:width/2,alignItems:'center',fontSize:20,fontWeight:'bold'}}>Birth Date</Text>                            
                        </View>

                        {playerinfo[this.state.name].basic.resultSets[0].rowSet.map((element,index)=>{
                            return(
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flexDirection:'column',marginBottom:5}}>
                                        <Text style={{width:width/5,alignItems:'center'}}>{element[4]}</Text>                                     
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={{width:width/5,alignItems:'center'}}>{element[5]}</Text>                                     
                                    </View>    
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={{width:width/5,alignItems:'center'}}>{element[9]}</Text>                                     
                                    </View>    
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={{width:width/5,alignItems:'center'}}>{element[6]}</Text>                                     
                                    </View> 
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={{width:width/5,alignItems:'center'}}>{element[7]}</Text>                                     
                                    </View>       
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={{width:width/3,alignItems:'center'}}>{element[11]}</Text>                                     
                                    </View>             
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={{width:width/2,alignItems:'center'}}>{element[8]}</Text>                                     
                                    </View>       
                                </View>
                        
                        )                            
                        })}                        
                    </View>

                </ScrollView>               
            </View>   
        )
    }
}

const styles = StyleSheet.create({
    data:{
        width:width/2,
        alignItems:'center'
    },
    text:{
        fontSize:20,
    }
})
const topNavigator = createMaterialTopTabNavigator({
    information:{
        screen: information,
        navigationOptions:{
            title:'Information',
        }
    },
    datas:{
        screen:datas,
        navigationOptions:{
            title:'Datas',
        }
    },
    lineup:{
        screen:lineup,
        navigationOptions:{
            title:'Lineup',
        }
    }
},{
    swipeEnabled:true,
    animationEnabled:true,
    tabBarOptions:({navigation})=>({
        upperCaseLabel:false, 

    })
    
})


const Ap = createAppContainer(topNavigator);
export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: this.props.name
        }
    }

    render() {
        return <Ap screenProps={{name: this.state.name}}/>
    }
} 