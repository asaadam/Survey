import React, { useState,useEffect } from 'react'
import { View, TouchableOpacity} from 'react-native'
import { Card, CardItem, Spinner, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

function ListData(props) {
    const [data, setData] = useState({});

    useEffect(() => {
        setData(props);
    }, []);
    if (data.data === undefined){
        return(
            <TouchableOpacity onPress={() => props.navigation.push('scanQrPage',{
                data:data.data.item
            })}>
            <Card >
                <CardItem >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}>
                        <Spinner/>
                    </View>
                </CardItem>
            </Card>
        </TouchableOpacity>
        )
    }
    else{

        return (
            <TouchableOpacity onPress={() => props.navigation.push('scanQrPage',{
                data:data.data.item
            })}>
                <Card >
                    <CardItem >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}>
                            <Text>
                                {data.data.item.desa}
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
export default withNavigation(ListData);