import React, { useEffect } from 'react';
import { Text, Button, View, AsyncStorage, FlatList, StyleSheet } from 'react-native';
import ListData from '../component/ListData';

export default function Login(props) {


    async function logout() {
        await AsyncStorage.removeItem('token');

        props.navigation.navigate('Login');
    }
    return (
        <View style={{padding:16}}>
            <FlatList
                data={[
                    { key:'1',Desa: 'Desa A',Kios:'Kios A' },
                    { key:'2',Desa: '2',Kios:'2' },
                    { key:'3',Desa: '3',Kios:'3' },
                    { key:'4',Desa: '4',Kios:'4' },
                    { key:'5',Desa: '5',Kios:'5' },

                ]}
                renderItem={({ item }) => <ListData style={styles.item} data={item}></ListData>}
            />

            <Button
                title="Logout"
                onPress={() => logout()}
            />
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
