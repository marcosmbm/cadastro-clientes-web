import React from 'react'; 

import {EmailIcon, LockIcon} from '@chakra-ui/icons';
import {Flex, Stack, Image, Heading, Box, FormControl, InputGroup, InputLeftElement, Input, FormHelperText, Link, Button} from '@chakra-ui/react';

import logo from '../../../assets/logo.png';

export default function SignIn() {
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
            Cadastro de Clientes
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
                          placeholder="********"
                        />
                    </InputGroup>

                    <FormHelperText textAlign={"right"}>
                      <Link>Esqueceu a senha?</Link>
                    </FormHelperText>
                </FormControl>

                <Button type={"submit"} variant="solid" colorScheme="green">
                    Entrar
                </Button>
            </Stack>
          </form>
        </Box>
     </Stack>

     <Box>
        Ainda não possui cadastro? <Link color={"green"}>Cadastre-se</Link>
     </Box>
   </Flex>
  );
}