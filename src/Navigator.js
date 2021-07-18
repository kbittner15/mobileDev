import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegularModeScreen from './screens/WelcomePage/WelcomeScreen.js';
import loginScreen from './screens/loginScreen/index'
import NewActScreen from './screens/SignupPage/NewActScreen-Change.js'
import WelcomeScreen from './screens/WelcomePage/WelcomeScreen.js'
import HomeScreen from './screens/HomePage/RegularMode/RegularModeScreen'


const Navigator = createStackNavigator(
  {
    RegularMode: {screen: RegularModeScreen},
    Login: {screen: loginScreen},
    Welcome: {screen: loginScreen},
    SignUp: {screen: NewActScreen},
    Home: {screen: HomeScreen}
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'none'
  }
);

export default createAppContainer(Navigator);
