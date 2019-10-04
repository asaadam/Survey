import React, { useState } from 'react';
import { Image, AsyncStorage } from 'react-native';
import {  View, Container, Header, Content, Form, Item, Input, Label, Button, Text, } from 'native-base';
export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function sendLogin() {
        await AsyncStorage.setItem('token', 'token');
        props.navigation.navigate('Home');

    }
        return (
            <Container>
                <Header style={{ alignItems: 'center',backgroundColor:'#004600' }}>
                    <Text style={{ color: 'white' }}>Login</Text>
                </Header>

                <Content style={{ padding: 16 }}>
                    <View>
                        <Image
                            style={{width: 150, height: 150}}
                            source={{uri: 'https://www.pertanian.go.id/img/logo.png'}}
                        />
                    </View>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Button onPress={sendLogin} style={{ marginTop: 20, justifyContent: 'center',backgroundColor:'#004600'}}>
                        <Text>Login</Text>
                    </Button>
                </Content>
            </Container>
        );
}

// const style = StyleSheet.create({

//     textInput: {
//         width: 200,
//         borderColor: 'black',
//         borderStyle: 'solid',
//         borderWidth: 1
//     },
//     button: {
//         backgroundColor: '#004600',
//         width: 200,
//         height: 50,
//         borderRadius: 7,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// })