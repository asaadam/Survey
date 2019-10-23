import React from 'react';
import { Text, Container, Content, Card, CardItem, Body, View } from 'native-base';
import { TouchableOpacity, Button } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';



function createCard(data, props) {

    let onPress;
    if (data === 'kios') {
        onPress = () => {
            props.navigation.push('homePage');
        }
    }
    else {
        onPress = () => {
            props.navigation.push('kuisionerPage',{
                type:data
            });
        }
    }
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <Card>
                <CardItem>
                    <Body>
                        <Text>
                            {data}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        </TouchableOpacity>
    )
}

export default function Choose(props) {
    async function logout() {
        await AsyncStorage.removeItem('token');
        props.navigation.navigate('Login');
    }
    return (
        <Container >
            <Content style={{ padding: 16 }}>
                <View style={{}}>
                    {createCard('kios', props)}

                    {createCard('petani', props)}
                </View>
                <View style={{}}>
                    {createCard('penyuluh', props)}

                    {createCard('Kelompok Tani', props)}
                </View>
                <Button
                    title="Logout"
                    onPress={() => logout()}
                >
                </Button>
            </Content>
        </Container>

    )
}