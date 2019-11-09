import React, { useState, useEffect } from 'react';
import { Text, Content, ListItem, Radio, Right, Left, View, Button, Input, CheckBox, Body } from 'native-base';
import { BackHandler } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';


function RenderSpesificSoal(jenis, pilihan, onAnswer) {

    let [answer, setAnswer] = useState([
        {
            key: '0',
            value: false
        },
        {
            key: '1',
            value: false
        },
        {
            key: '2',
            value: false
        },
        {
            key: '3',
            value: false
        },
    ]);
    let [test, setTest] = useState(false);
    switch (jenis) {

        case 'pilihan_ganda':
            return (
                <View>
                    <ListItem>
                        <Left>
                            <Text>{pilihan.pilihanA}</Text>
                        </Left>
                        <Right>
                            <Radio onPress={() => {
                                return onAnswer('A')
                            }} />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>{pilihan.pilihanB}</Text>
                        </Left>
                        <Right>
                            <Radio onPress={() => {
                                return onAnswer('B')
                            }} />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>{pilihan.pilihanC}</Text>
                        </Left>
                        <Right>
                            <Radio onPress={() => {
                                return onAnswer('C')
                            }} />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>{pilihan.pilihanD}</Text>
                        </Left>
                        <Right>
                            <Radio onPress={() => {
                                return onAnswer('D')
                            }} />
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
                            <Radio onPress={() => {
                                return onAnswer('Yes')
                            }} />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>No</Text>
                        </Left>
                        <Right>
                            <Radio onPress={() => {
                                return onAnswer('No')
                            }} />
                        </Right>
                    </ListItem>

                </View>
            )
        case 'isian':
            return (
                <View>
                    <ListItem>
                        <Text>Answer </Text>
                        <Input bordered onChangeText={data => {
                            return onAnswer(data);
                        }} />
                    </ListItem>

                </View>)
        case 'checkbox':

            return (
                <View>
                    <ListItem>
                        <CheckBox checked={answer[0].value} onPress={() => {
                            let temp = answer;
                            temp[0].value = !temp[0].value;
                            setAnswer(temp);
                            setTest(!test);
                            return onAnswer(answer);
                        }} />
                        <Body>
                            <Text>{pilihan.pilihanCB1}</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={answer[1].value} onPress={() => {
                            let temp = answer;
                            temp[1].value = !temp[1].value;
                            setAnswer(temp);
                            setTest(!test);
                            return onAnswer(answer);
                        }} />
                        <Body>
                            <Text>{pilihan.pilihanCB2}</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={answer[2].value} onPress={() => {
                            let temp = answer;
                            temp[2].value = !temp[2].value;
                            setAnswer(temp);
                            setTest(!test);
                            return onAnswer(answer);
                        }} />
                        <Body>
                            <Text>{pilihan.pilihanCB3}</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={answer[3].value} onPress={() => {
                            let temp = answer;
                            temp[3].value = !temp[3].value;
                            setAnswer(temp);
                            setTest(!test);
                            return onAnswer(answer);
                        }} />
                        <Body>
                            <Text>{pilihan.pilihanCB4}</Text>
                        </Body>
                    </ListItem>

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

    function onAnswer(data) {
        console.log(data);
    }
    return (
        <View>
            <Text>Pertanyaan ke {counter + 1}</Text>
            <Text>
                {props.data[counter].pertanyaan_kuisioner}
            </Text>
            {RenderSpesificSoal(props.data[counter].jenis_pertanyaan, props.data[counter], onAnswer)}
            <RenderButton />

        </View>
    )

}


export default function ListKuisioner(props) {
    let [soal, setSoal] = useState();
    let [counter, setCounter] = useState(0);

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
