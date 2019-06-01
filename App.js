import {View,Text} from 'react-native';
import React,{Component} from 'react'
import{createStackNavigator, createAppContainer} from 'react-navigation';
import Rankings from './rankings/rankings'
import TeamDeatails from './rankings/team_details'
import Header from '../NBA/header'
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen:Rankings,
      navigationOptions:({navigation}) => ({
        headerTitle: (
          <View style={{flex:1,flexDirection:'row'}}>
            <Header navigation={navigation}/>             
          </View>
        )
        })
    },
    Details: {
      screen:TeamDeatails,
      navigationOptions:{
        title:'Team Detail',
      }
    }
  },
  {
    initialRouteName:'Home',
  }

)



export default createAppContainer(AppNavigator);
