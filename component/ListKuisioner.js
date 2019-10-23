import React, { useState, useEffect } from 'react';
import { Text, Content, ListItem, Radio, Right, Left, View, Button, Input, CheckBox, Body } from 'native-base';
import { BackHandler } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';


function RenderSoal(props) {


    switch (props.data.jenis_pertanyaan) {
        case 'pilihan_ganda':
            return (
                <View>
                    <ListItem>
                        <Left>
                            <Text>{props.data.pilihanA}</Text>
                        </Left>
                        <Right>
                            <Radio />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>{props.data.pilihanB}</Text>
                        </Left>
                        <Right>
                            <Radio />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>{props.data.pilihanC}</Text>
                        </Left>
                        <Right>
                            <Radio />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>{props.data.pilihanD}</Text>
                        </Left>
                        <Right>
                            <Radio />
                        </Right>
                    </ListItem>
                </View>)
        case 'yesno':
            return (
                <View>
                    <ListItem>
                        <Left>
                            <Text>Yes</Text>
                        </Left>
                        <Right>
                            <Radio />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>No</Text>
                        </Left>
                        <Right>
                            <Radio />
                        </Right>
                    </ListItem>
                </View>
            )
        case 'isian':
            return (
                <View>
                    <ListItem>
                        <Text>Answer </Text>
                        <Input bordered />
                    </ListItem>
                </View>)
        case 'checkbox':
            return (
                <View>
                    <ListItem>
                        <CheckBox checked={true} />
                        <Body>
                            <Text>{props.data.pilihanCB1}</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} />
                        <Body>
                            <Text>{props.data.pilihanCB2}</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} />
                        <Body>
                            <Text>{props.data.pilihanCB3}</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} />
                        <Body>
                            <Text>{props.data.pilihanCB4}</Text>
                        </Body>
                    </ListItem>
                </View>
            )
    }

}


export default function ListKuisioner(props) {
    let [soal, setSoal] = useState();
    let [counter, setCounter] = useState(0);

    async function getData() {
        let data = await AsyncStorage.getItem(props.type);
        let parse = JSON.parse(data);
        setSoal(parse);
    }

    function backButtonHandler() {
        if (counter == 0) {
            return false;
        }
        else {
            setCounter(--counter);
            return true;
        }
    }
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backButtonHandler)
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", backButtonHandler);
        }
    })
    useEffect(() => {
       
        getData();
    }, []);
    if (soal != undefined) {
        return (
            <Content style={{ padding: 16 }}>
                <Text>Pertanyaan ke {counter + 1}</Text>
                <Text>
                    {soal[counter].pertanyaan_kuisioner}
                </Text>
                <RenderSoal data={soal[counter]} />
                <Button onPress={() => {
                    setCounter(++counter);
                }}>
                    <Text>
                        Next
                </Text>
                </Button>
            </Content>
        )
    }
    else {
        return (
            <Text>Loading..</Text>
        )
    }

}