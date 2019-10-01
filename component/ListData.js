import React, { Component } from 'react'
import { View, TouchableOpacity} from 'react-native'
import { Card, CardItem, Body, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

 function ListData(props) {
    return (
        <TouchableOpacity onPress={()=>props.navigation.push('choosePage')}>
        <Card >
            <CardItem >
                    <View style={{flexDirection:'row',justifyContent:'space-around',flex:1}}>
                        <Text>
                            {props.data.Desa}
                        </Text>
                        <Text>{props.data.Kios}</Text>
                    </View>
            </CardItem>
        </Card>
        </TouchableOpacity>
    )

}
export default withNavigation(ListData);