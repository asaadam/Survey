import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Text } from 'native-base';

export default function FormDataKelompokTani(){

    return (
        <Container>
            <Header />
            <Content>
            <Text>Form Kelompok Data Tani</Text>
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                </Form>
            </Content>
        </Container>
    )
}
