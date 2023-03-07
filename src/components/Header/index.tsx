import React from 'react'; 

import {Flex, Container, Image, Text, Stack, Button} from '@chakra-ui/react';

import logo from '../../assets/logo.png';

export default function Header() {
  return (
   <Flex
        backgroundColor={"whiteAlpha.900"}
        boxShadow="md"
   >
     <Container
        maxWidth={"container.lg"}
     >
        <Stack
            flexDirection={"row"}
            alignItems="center"
            justifyContent={"space-between"}
            mt={2}
            mb={2}
        >
            <Image
                src={logo}
                alt="Logo da aplicação"
                boxSize={"40px"}
                objectFit={"contain"}
                marginRight={"2rem"} //32px
            />
            <Text fontSize={"xl"} fontWeight={"500"}>Cadastro de Clientes</Text>

            <Stack style={{marginLeft: 'auto'}}>
                <Button variant={"link"}>Sair</Button>
            </Stack>
        </Stack>
     </Container>
   </Flex>
  );
}