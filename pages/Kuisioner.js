import React, { useState, useEffect } from 'react';
import ListKuisioner from '../component/ListKuisioner';
import { Container, Text } from 'native-base';


export default function Kuisioner(props) {
    let [jenis, setJenis] = useState();
    useEffect(() => {
        switch (props.navigation.getParam("type")) {
            case 'penyuluh':
                setJenis('soalPenyuluh');
                break;
            case 'Kelompok Tani':
                setJenis('soalKelompokTani');
                break;
            case 'petani':
                setJenis('soalPetani');
                break;
            default:
                setJenis('soalKios');
                break;
        }
    }, [jenis]);
    if (jenis) {
        return (
            <Container>
                <ListKuisioner  type={jenis}/>
            </Container>
        )
    } else {
        return (
            <Text>Loading...</Text>
        )
    }
}