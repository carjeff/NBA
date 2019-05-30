import {View,Text} from 'react-native';
import{createStackNavigator, createAppContainer} from 'react-navigation';
import Rankings from './rankings/rankings'
import TeamDeatails from './rankings/team_details'
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen:Rankings,
      navigationOptions:{
        header:null,
      }
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
