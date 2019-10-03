import React from 'react';
import {  FlatList } from 'react-native';
import {Container} from 'native-base';
import ListDraft from '../component/ListDraf';
export default function Draft() {
    return (
        <Container>
            <FlatList
                data={[
                    { key: '1', Desa: 'Desa A', Kios: 'Kios A' },
                    { key: '2', Desa: '2', Kios: '2' },
                    { key: '3', Desa: '3', Kios: '3' },
                    { key: '4', Desa: '4', Kios: '4' },
                    { key: '5', Desa: '5', Kios: '5' },

                ]}
                renderItem={({ item }) => <ListDraft  data={item}></ListDraft>}
            />

        </Container>
    )
}