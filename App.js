import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';

const navigation = createStackNavigator(
  {
    Home: IndexScreen
  },
  {
    initialRouteName:'Home',
    defaultNavigationOptions: {
      title: 'Note App'
    }
  }
);

const App = createAppContainer(navigation);

export default () => {
  return <App />;
}