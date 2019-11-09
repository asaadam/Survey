import React, { useState, useEffect } from 'react';
import { Text, Content, ListItem, Radio, Right, Left, View, Button, Input, CheckBox, Body } from 'native-base';
import { BackHandler } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';


function RenderSpesificSoal(jenis, pilihan, onAnswer, onNext, checkQuestionNumber, answerData) {
    const DEFAULT_CHECKBOX = [
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
    ];
    const DEFAULT_RADIO = [false, false];
    const DEFAULT_RADIO_FOUR = [false, false, false, false];


    let [answer, setAnswer] = useState(DEFAULT_CHECKBOX);
    let [test, setTest] = useState(false);
    let [radio, setRadio] = useState(DEFAULT_RADIO);
    let [radioFour, setRadioFour] = useState(DEFAULT_RADIO_FOUR);
    let [essay, setEssay] = useState('');
    useEffect(() => {
        if (answerData != null) {
            switch (answerData.tipe) {
                case "checkbox":
                    setAnswer(answerData.answer)
                    setTest(!test)
                    break;
                case "pilihan_ganda":
                    setRadioFour(answerData.answer)
                    setTest(!test)
                    break;
                case "yesno": setRadio(answerData.answer)
                    setTest(!test)
                    break;
                default: setEssay(answerData.answer)
                    setTest(!test)
                    break;
            }
        }

    }, [answerData]);


    const RenderButton = () => {
        if (!checkQuestionNumber) {
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
                    if (jenis === 'pilihan_ganda') {
                        onAnswer(radioFour);
                    }
                    else if (jenis === 'yesno') {
                        onAnswer(radio);
                    }
                    else if (jenis === 'isian') {
                        onAnswer(essay);
                    }
                    else {
                        onAnswer(answer);
                    }
                    setRadio(DEFAULT_RADIO);
                    setAnswer(DEFAULT_CHECKBOX);
                    setEssay('');
                    setRadioFour(DEFAULT_RADIO_FOUR);
                    return onNext();
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
                            <Radio onPress={() => {
                                let temp = radioFour;
                                temp[0] = true;
                                temp[1] = false;
                                temp[2] = false;
                                temp[3] = false;
                                setRadioFour(temp);
                                setTest(!test);
                            }} selected={radioFour[0]} />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>{pilihan.pilihanB}</Text>
                        </Left>
                        <Right>
                            <Radio onPress={() => {
                                let temp = radioFour;
                                temp[0] = false;
                                temp[1] = true;
                                temp[2] = false;
                                temp[3] = false;
                                setRadioFour(temp);
                                setTest(!test);
                            }} selected={radioFour[1]} />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>{pilihan.pilihanC}</Text>
                        </Left>
                        <Right>
                            <Radio onPress={() => {
                                let temp = radioFour;
                                temp[0] = false;
                                temp[1] = false;
                                temp[2] = true;
                                temp[3] = false;
                                setRadioFour(temp);
                                setTest(!test);
                            }} selected={radioFour[2]} />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>{pilihan.pilihanD}</Text>
                        </Left>
                        <Right>
                            <Radio onPress={() => {
                                let temp = radioFour;
                                temp[0] = false;
                                temp[1] = false;
                                temp[2] = false;
                                temp[3] = true;
                                setRadioFour(temp);
                                setTest(!test);
                            }} selected={radioFour[3]} />
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
                            <Radio onPress={() => {
                                let temp = radio;
                                temp[0] = true;
                                temp[1] = false;
                                setRadio(temp);
                                setTest(!test);
                            }} selected={radio[0]} />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>No</Text>
                        </Left>
                        <Right>
                            <Radio onPress={() => {
                                let temp = radio;
                                temp[0] = false;
                                temp[1] = true;
                                setRadio(temp);
                                setTest(!test);

                            }} selected={radio[1]} />
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
                        <Input bordered onChangeText={data => {
                            setEssay(data);

                        }} value={essay} />
                    </ListItem>
                    <RenderButton />
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

                        }} />
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
    function checkQuestionNumber() {
        if (counter === props.data.length - 1) {
            return false;
        }
        else {
            return true;
        }
    }
    function onNext() {
        setCounter(++counter);
    }

    function onAnswer(data) {
        console.log(data);
        let item = {
            tipe: props.data[counter].jenis_pertanyaan,
            answer: data
        }
        answer.push(item);
    }
    return (
        <View>
            <Text>Pertanyaan ke {counter + 1}</Text>
            <Text>
                {props.data[counter].pertanyaan_kuisioner}
            </Text>
            {RenderSpesificSoal(props.data[counter].jenis_pertanyaan, props.data[counter], onAnswer, onNext, checkQuestionNumber(), answer[counter])}

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
