import React, { useEffect, useState } from 'react';
import { Text, Button, View, AsyncStorage, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import Axios from 'axios';
import { Spinner,Card,CardItem } from 'native-base';

function ListData(props) {
    const [data, setData] = useState({});

    useEffect(() => {
        setData(props);
    }, []);
    if (data.data === undefined){
        return(
            <TouchableOpacity onPress={() => data.navigation.push('choosePage')}>
            <Card >
                <CardItem >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}>
                        <Text>
                            Undefined
                        </Text>
                        <Text>Undefined</Text>
                    </View>
                </CardItem>
            </Card>
        </TouchableOpacity>
        )
    }
    else{
        return (
            <TouchableOpacity onPress={() => data.navigation.push('choosePage')}>
                <Card >
                    <CardItem >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}>
                            <Text>
                                {data.data.item.desa}
                                test
                            </Text>
                            <Text>{data.data.item.nama_kios}
                            </Text>
                        </View>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        )
    }
    

}

export default function Login(props) {


    let [kios, setKios] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ]);
    let [loading, setLoading] = useState(false);
    async function logout() {
        await AsyncStorage.removeItem('token');

        props.navigation.navigate('Login');
    }



    async function getData() {
        setLoading(true);
        let data = await Axios.get("http://202.149.70.33/api/tampilkan_kiosJSON");
        setKios(data.data.data);
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
                        renderItem={(data) => {
                            return (
                                <ListData style={styles.item} data={data}></ListData>)
                        }}
                    />

                    <Button
                        title="Logout"
                        onPress={() => logout()}
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
