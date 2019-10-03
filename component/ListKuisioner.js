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
            <Button>
                <Text>
                    Next
                </Text>
            </Button>
        </Content>
    )
}