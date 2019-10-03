import React from 'react';
import { Text, Content, ListItem, Radio, Right, Left, Container, View, Button } from 'native-base';





// function kuisionerFInish() {
//     return (
//         <Container>
//             <Text>Upload Kuisioner ?</Text>
//             <View style={{ flexDirection: 'row' }}>
//                 <Button>
//                     <Text>Upload</Text>
//                 </Button>
//                 <Button>
//                     <Text>Upload</Text>
//                 </Button>
//             </View>
//         </Container>
//     )
// }

export default function ListKuisioner() {

    return (
        <Content>
            <Text>Soal Kuisioner 1</Text>
            <ListItem>
                <Left>
                    <Text>Opsi 1</Text>
                </Left>
                <Right>
                    <Radio />
                </Right>
            </ListItem>
            <ListItem>
                <Left>
                    <Text>Opsi 2</Text>
                </Left>
                <Right>
                    <Radio />
                </Right>
            </ListItem>
            <ListItem>
                <Left>
                    <Text>Opsi 3</Text>
                </Left>
                <Right>
                    <Radio />
                </Right>
            </ListItem>
            <ListItem>
                <Left>
                    <Text>Opsi 4</Text>
                </Left>
                <Right>
                    <Radio />
                </Right>
            </ListItem>
            <ListItem>
                <Text>Text Area </Text>
                <Textarea rowSpan={5} bordered placeholder="Textarea" />
            </ListItem>

            <ListItem>
                <CheckBox checked={true} />
                <Body>
                    <Text>Daily Stand Up</Text>
                </Body>
            </ListItem>
            <ListItem>
                <CheckBox checked={false} />
                <Body>
                    <Text>Discussion with Client</Text>
                </Body>
            </ListItem>
            <ListItem>
                <CheckBox checked={false} color="green" />
                <Body>
                    <Text>Finish list Screen</Text>
                </Body>
            </ListItem>
            <Button>
                <Text>
                    Next
                </Text>
            </Button>

        </Content>
    )
}