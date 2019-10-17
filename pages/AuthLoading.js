import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Spinner } from 'native-base';

export default function AuthLoadingChildren(props) {

    useEffect(() => {
        getToken();
    })

    getToken = async () => {
        let userToken = await AsyncStorage.getItem('token');
        if (!userToken) {
            props.navigation.navigate('Login');
        }
        else {
            props.navigation.navigate('Home');
        }
    }

    return (
        <View>
            <Spinner />
            <Text>Check your login status....</Text>
        </View>
    )

}