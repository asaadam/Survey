

import React, { useEffect, useState } from 'react';

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
import { Button, Text, Root, View, Toast } from 'native-base';
import Kuisioner from './pages/Kuisioner';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';
const Main = createStackNavigator({
  choosePage: {
    screen: Choose,
    navigationOptions: ({ navigation }) => ({
      title: "Home Screen",
      headerRight: (
        <Button onPress={() => {
          navigation.push('draftPage')
        }}>
          <Text>Draft</Text>
        </Button>
      )
    })
  },
  homePage: {
    screen: MainPage,

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

  // let [kios,setKios]=useState([]);

  async function getData() {
    let data = await Axios.get("http://202.149.70.33/api/tampilkan_kiosJSON");
    await AsyncStorage.setItem('kios', JSON.stringify(data));
  }

  let [internet, setInternet] = useState(false);
  useEffect(() => {
    NetInfo.addEventListener(state => {
      setInternet(state.isConnected);
    });
    if (internet) {
      getData();
      Toast.show({
        text: 'Connected To internet, retrieve new data  ',
        buttonText: 'Okay'
      })
    }
    else {
      Toast.show({
        text: 'Not Connected to internet, Using latest update',
        buttonText: 'Okay'
      })
    }


  }, [internet])

  return (
    <Root>
      <Container />
    </Root>
  );

}

export default App;
