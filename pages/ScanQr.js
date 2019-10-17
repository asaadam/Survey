import React, { useState,useEffect } from 'react';
import { Text, Container, Button } from 'native-base';
import {
    StyleSheet,
    View
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default function ScanQr(props) {



    const [data, setData] = useState('');
    
    useEffect(() => {
        setData(props.navigation.getParam('data'));
    }, []);
    return (
        <Container>
            <QRCodeScanner
                onRead={(value) => { if(value.data!=data.kode_qr){
                    alert("Wrong qr Code");
                } 
                else{
                    props.navigation.push('kuisionerPage')
                }
                }}
                bottomContent={
                    <View>
                   
                        <Button onPress={() => props.navigation.goBack()}>
                            <Text>
                                Back To Choose Page
                      </Text>

                        </Button>
                    </View>
                }
            />

        </Container>)
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
});