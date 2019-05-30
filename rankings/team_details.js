import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,Dimensions} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import teams from '../assets/team_map';
import team from '../rankings/teams';


const height=Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class TeamDeatails extends Component {
  static navigationOptions = {
    title: 'Github Users',
  }
  constructor(props){
    super(props)
    this.state = {
      name: this.props.navigation.state.params.name,
      team: []
    }
  };
  componentDidMount(){
    fetch(`https://stats.nba.com/stats/teaminfocommon?LeagueID=00&SeasonType=Regular+Season&TeamID=1610612749&season=2018-19`)
      .then(response => response.json())
      .then( data=>{
        console.log(data)
      })
      .catch(error =>alert(error))
  }
  render(){
    return ( 
      <View>
        <View 
          style={[styles.container,{backgroundColor:teams[this.state.name].color}]} 
          >
          <Image source={teams[this.state.name].logo} style={{width:65,height:65}}/>
          <Text style={styles.font}>{teams[this.state.name].team}</Text>
        </View>   
      </View>
    )
  }
}

  const styles = StyleSheet.create({
      container: {
        height:height/3,
        justifyContent:'center',
        alignItems:'center',
      },
      font:{
        fontSize:40,
        fontStyle: 'italic',
        color:'white',

      }
  })

  const stacknavigator = createStackNavigator({
    Home:{
      screen:team,
      navigationOptions:{
        headerTitle:<TeamDeatails/>
      }
    }
  })



export default createAppContainer(stacknavigator) ;