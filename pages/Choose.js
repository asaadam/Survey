import React from 'react';
import { Text, Container, Content, Card, CardItem, Body, View } from 'native-base';
import {TouchableOpacity} from 'react-native';

function createCard(data,props) {
    return (
        <TouchableOpacity onPress={()=>props.navigation.push('scanQrPage')}>

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
    return (
        <Container >
            <Content style={{padding:16}}>
                <View style={{}}>
                    {createCard('kios',props)}

                    {createCard('petani',props)}
                </View>
                <View style={{}}>
                    {createCard('penyuluh',props)}

                    {createCard('Kelompok Tani',props)}
                </View>
            </Content>
        </Container>

    )
}