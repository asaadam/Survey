import React, { useEffect, useState } from 'react';
import { Text, Button, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Axios from 'axios';
import { Spinner, Card, CardItem } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import ListData from '../component/ListData';


export default function Login(props) {


    let [kios, setKios] = useState([
    ]);
    let [loading, setLoading] = useState(false);



    async function getData() {
        setLoading(true);
        let data = await AsyncStorage.getItem('kios');
        let parse = JSON.parse(data)
        setKios(parse.data.data);
        setLoading(false);
    }


    useEffect(() => {
        getData();
    }, []);


    return (
        <View style={{ padding: 16 }}>
            {loading ? <Spinner /> :
                <View>
                    <FlatList
                        data={kios}
                        keyExtractor={item => item.kode_qr}
                        renderItem={(data) => {
                            return (
                                <ListData style={styles.item} data={data}></ListData>)
                        }}
                    />

                </View>
            }

        </View>
    )



}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
