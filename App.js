

import React from 'react';

import {
  createSwitchNavigator,
  createAppContainer,

} from 'react-navigation';
import AuthLoading from './pages/AuthLoading';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import { createStackNavigator } from 'react-navigation-stack';
import Choose from './pages/Choose';
import ScanQr from './pages/ScanQr';
import Draft from './pages/Draft';
import { Button, Text } from 'native-base';
import Kuisioner from './pages/Kuisioner';
const Main = createStackNavigator({
  homePage: {
    screen: MainPage,
    navigationOptions: ({ navigation }) => ({
      title: "Home Screen",
      headerRight: (
        <Button onPress={()=>{
          navigation.push('draftPage')
        }}>
          <Text>Draft</Text>
        </Button>
      )
    })
  },
  choosePage: {
    screen: Choose
  },
  scanQrPage: {
    screen: ScanQr
  },
  draftPage: {
    screen: Draft
  },
  kuisionerPage: {
    screen: Kuisioner
  }
})
const MainSwitch = createSwitchNavigator({
  AuthLoading: AuthLoading,
  Login: Login,
  Home: Main
});




const Container = createAppContainer(MainSwitch);


const App = () => {
  return (
    <Container />
  );
};


export default App;
