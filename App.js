import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import BookShowScreen from './src/screens/BookShowScreen';


const navigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Home: HomeScreen,
  Book: BookShowScreen,
}, {
  initialRouteName: 'Welcome',
  defaultNavigationOptions: {
    title: 'Leitnerbooks'
  }
})

export default createAppContainer(navigator);