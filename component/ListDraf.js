import React, { Component } from 'react'
import { View, TouchableOpacity} from 'react-native'
import { Card, CardItem, Button, Text } from 'native-base';

 export default function ListData(props) {
    return (
        <TouchableOpacity >
        <Card >
            <CardItem >
                    <View style={{flexDirection:'row',justifyContent:'space-around',flex:1}}>
                        <Text>
                            {props.data.Desa}
                        </Text>
                        <Text>{props.data.Kios}</Text>
                    </View>
                    <View>
                        <Button>
                            <Text>Upload</Text>
                        </Button>
                    </View>
            </CardItem>
        </Card>
        </TouchableOpacity>
    )

}
