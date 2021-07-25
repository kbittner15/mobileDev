import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegularModeScreen from './App/Screens/WelcomePage/WelcomeScreen.js';
import login from './App/Screens/login/loginScreen'
import NewActScreen from './App/Screens/SignupPage/NewActScreen-Change.js'
import WelcomeScreen from './App/Screens/WelcomePage/WelcomeScreen.js'
import HomeScreen from './App/Screens/HomePage/RegularMode/RegularModeScreen'



const Navigator = createStackNavigator(
  {
    RegularMode: {screen: RegularModeScreen},
    Login: {screen: login},
    Welcome: {screen: WelcomeScreen},
    SignUp: {screen: NewActScreen},
    Home: {screen: HomeScreen}
  },
  {
    initialRouteName: 'WelcomeScreen',
    headerMode: 'none'
  }
);

export default createAppContainer(Navigator);
