import React from 'react'; 

import {
    Flex, 
    Container, 
    Stack, 
    Box, 
    InputGroup, 
    InputLeftElement, 
    Input, 
    Button,
    Alert,
    AlertIcon,
    AlertTitle
} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons';

import Header from '../../../components/Header';
import TableItem from './TableItem';

export default function Home() {

  const clients = [1];

  return (
   <Flex
    flexDirection={'column'}
    width="100vw"
    height="100vh"
    backgroundColor={"gray.200"}
    gap={15}
   >
     <Header/>

     <Container maxW={"container.lg"}>
        <Stack>
          <Box
            backgroundColor={"whiteAlpha.900"}
            boxShadow="md"
            borderRadius={"md"}
            p={"1rem"}
          >
            <InputGroup>
              <InputLeftElement
                 pointerEvents={"none"}
                 children={<SearchIcon color={"gray.300"}/>}
              />

              <Input
                placeholder='Buscar Cliente'
                type={"text"}
              />
            </InputGroup>
          </Box>

          <Flex 
            justifyContent={"flex-end"}
          >
            <Button type={'submit'} variant="solid" colorScheme={"green"}>
              Adicionar
            </Button>
          </Flex>

          <Box
            backgroundColor={"whiteAlpha.900"}
            boxShadow="md"
            borderRadius={"md"}
            p={"1rem"}
          >
            {
              clients.length > 0 ?
              <TableItem/>
              :
              <Alert status='info'>
                <AlertIcon />
                <AlertTitle>Não existem itens para exibir</AlertTitle>
              </Alert>
            }
          </Box>
        </Stack>
     </Container>
   </Flex>
  );
}