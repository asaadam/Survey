import React, { useState, useEffect } from 'react';
import { Text, Content, ListItem, Radio, Right, Left, View, Button, Input, CheckBox, Body } from 'native-base';
import { BackHandler } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';


function RenderSpesificSoal(jenis, pilihan) {

    let [answer, setAnswer] = useState([]);
    let [counter, setCounter] = useState(0);


    const RenderButton = () => {
        if (counter === props.data.length - 1) {
            return (
                <Button onPress={() => {
                    alert("Submited");
                }}>
                    <Text>
                        Submit
                        </Text>
                </Button>
            )
        }
        else {
            return (
                <Button onPress={() => {
                    setCounter(++counter);
                }}>
                    <Text>
                        Next
                        </Text>
                </Button>
            )
        }
    }
    switch (jenis) {
        case 'pilihan_ganda':
            return (
                <View>
                    <ListItem>
                        <Left>
                            <Text>{pilihan.pilihanA}</Text>
                        </Left>
                        <Right>
                            <Radio />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>{pilihan.pilihanB}</Text>
                        </Left>
                        <Right>
                            <Radio />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>{pilihan.pilihanC}</Text>
                        </Left>
                        <Right>
                            <Radio />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>{pilihan.pilihanD}</Text>
                        </Left>
                        <Right>
                            <Radio />
                        </Right>
                    </ListItem>
                    <RenderButton />
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
                    <RenderButton />

                </View>
            )
        case 'isian':
            return (
                <View>
                    <ListItem>
                        <Text>Answer </Text>
                        <Input bordered onChange={(answerData) => {
                            setAnswer(...answer, answerData);
                        }} />
                    </ListItem>
                    <RenderButton />

                </View>)
        case 'checkbox':
            return (
                <View>
                    <ListItem>
                        <CheckBox checked={true} />
                        <Body>
                            <Text>{pilihan.pilihanCB1}</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} />
                        <Body>
                            <Text>{pilihan.pilihanCB2}</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} />
                        <Body>
                            <Text>{pilihan.pilihanCB3}</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} />
                        <Body>
                            <Text>{pilihan.pilihanCB4}</Text>
                        </Body>
                    </ListItem>
                    <RenderButton />

                </View>
            )
    }
}


function RenderSoal(props) {

    let [answer, setAnswer] = useState([]);
    let [counter, setCounter] = useState(0);

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backButtonHandler)
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", backButtonHandler);
        }
    });
    function backButtonHandler() {
        if (counter == 0) {
            return false;
        }
        else {
            setCounter(--counter);
            return true;
        }
    }
    return (
        <View>
            <Text>Pertanyaan ke {counter + 1}</Text>
            <Text>
                {props.data[counter].pertanyaan_kuisioner}
            </Text>
            {RenderSpesificSoal(props.data[counter].jenis_pertanyaan, props.data[counter])}
        </View>
    )

}


export default function ListKuisioner(props) {
    let [soal, setSoal] = useState();

    async function getData() {
        let data = await AsyncStorage.getItem(props.type);
        let parse = JSON.parse(data);
        setSoal(parse);
    }


    useEffect(() => {
        getData();
    }, []);
    if (soal != undefined) {
        return (
            <Content style={{ padding: 16 }}>

                <RenderSoal data={soal} />

            </Content>
        )
    }
    else {
        return (
            <Text>Loading..</Text>
        )
    }

}
