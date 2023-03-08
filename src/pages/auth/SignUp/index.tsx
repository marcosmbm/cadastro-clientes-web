import React from 'react'; 

import {AtSignIcon, EmailIcon, LockIcon} from '@chakra-ui/icons';
import {Flex, Stack, Image, Heading, Box, FormControl, InputGroup, InputLeftElement, Input, Button} from '@chakra-ui/react';

import logo from '../../../assets/logo.png';
import RouterLink from '../../../components/RouterLink';

export default function SignUp() {
  return (
   <Flex
      flexDirection={'column'}
      width={'100vw'}
      height={'100vh'}
      backgroundColor={"gray.200"}
      alignItems={"center"}
      justifyContent={"center"}
   >
     <Stack
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        mb="2"
     >
        <Image
          src={logo}
          alt="Logo da aplicação"
          boxSize={"80px"}
          objectFit={"contain"}
        />

        <Heading>
            Cadastre-se
        </Heading>

        <Box
          minW={{base: '90%', md: '470'}}
        >
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor={"whiteAlpha.900"}
              boxShadow={"md"}
              borderRadius="md"
            >
                <FormControl>
                    <InputGroup>
                        <InputLeftElement
                          pointerEvents={"none"}
                          children={<AtSignIcon color={"gray.300"}/>}
                        />

                        <Input
                          type={"text"}
                          placeholder="Seu Nome"
                        />
                    </InputGroup>
                </FormControl>

                <FormControl>
                    <InputGroup>
                        <InputLeftElement
                          pointerEvents={"none"}
                          children={<EmailIcon color={"gray.300"}/>}
                        />

                        <Input
                          type={"email"}
                          placeholder="Endereço de email"
                        />
                    </InputGroup>
                </FormControl>

                <FormControl>
                    <InputGroup>
                        <InputLeftElement
                          pointerEvents={"none"}
                          children={<LockIcon color={"gray.300"}/>}
                        />

                        <Input
                          type={"password"}
                          placeholder="Senha"
                        />
                    </InputGroup>
                </FormControl>

                <FormControl>
                    <InputGroup>
                        <InputLeftElement
                          pointerEvents={"none"}
                          children={<LockIcon color={"gray.300"}/>}
                        />

                        <Input
                          type={"password"}
                          placeholder="Confirmar Senha"
                        />
                    </InputGroup>
                </FormControl>


                <Button type={"submit"} variant="solid" colorScheme="green">
                    Cadastrar
                </Button>

                <Button type={"button"} variant="link" colorScheme="green">
                   <RouterLink to='/'>Voltar</RouterLink>
                </Button>
            </Stack>
          </form>
        </Box>
     </Stack>
   </Flex>
  );
}