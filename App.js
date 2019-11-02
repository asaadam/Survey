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
import { Button, Text, Root, Toast } from 'native-base';
import Kuisioner from './pages/Kuisioner';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';
import FormDataPenyuluh from './pages/FormDataPenyuluh';
import FormDataKelompokTani from './pages/FormDataKelompokTani';
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
  },
 FormDataKelompokTani: {
    screen:FormDataKelompokTani
  },
  FormDataPenyuluh:{
    screen: FormDataPenyuluh
  }
})
const MainSwitch = createSwitchNavigator({
  AuthLoading: AuthLoading,
  Login: Login,
  Home: Main
});

const Container = createAppContainer(MainSwitch);

const App = () => {
  async function getData() {
    let data = await Axios.get("http://202.149.70.33/api/tampilkan_kiosJSON");
    await AsyncStorage.setItem('kios', JSON.stringify(data));
    let soal = await Axios.get("http://202.149.70.33/api/tampilkan_kuisionerJSON");
   let soalKios=[];
   let soalPetani=[];
   let soalPenyuluh=[];
   let soalKelompokTani=[];
   soal.data.data.filter(soal => {
    if (soal.nama_kategori_kuisioner === "Kios"){
      soalKios.push(soal);
    } 
    else if (soal.nama_kategori_kuisioner === "Petani"){
      soalPetani.push(soal);
    }
    else if (soal.nama_kategori_kuisioner === "Penyuluh"){
      soalPenyuluh.push(soal);
    }
    else if (soal.nama_kategori_kuisioner === "Kelompok Tani"){
      soalKelompokTani.push(soal);
    }
   });
    await AsyncStorage.setItem('soalKios', JSON.stringify(soalKios));
    await AsyncStorage.setItem('soalPetani', JSON.stringify(soalPetani));
    await AsyncStorage.setItem('soalPenyuluh', JSON.stringify(soalPenyuluh));
    await AsyncStorage.setItem('soalKelompokTani', JSON.stringify(soalKelompokTani));
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
