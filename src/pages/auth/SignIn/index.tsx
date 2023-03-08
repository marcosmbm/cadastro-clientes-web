import React from 'react'; 
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

import {EmailIcon, LockIcon} from '@chakra-ui/icons';
import {Flex, Stack, Image, Heading, Box, FormControl, InputGroup, InputLeftElement, Input, FormHelperText, Link, Button} from '@chakra-ui/react';

import logo from '../../../assets/logo.png';
import RouterLink from '../../../components/RouterLink';


export default function SignIn() {

  const navigate = useNavigate();
  const {register, handleSubmit} = useForm();

  function handleLogin(){
    // verificar se os dados de email e senha foram digitados
    // requisição para o backend
    // em caso de sucesso, ir para a rota home
    
    localStorage.setItem('@cadastro_clientes', 'teste')
    navigate('/dashboard', {replace: true});
  }

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
          <form onSubmit={handleSubmit(handleLogin)}>
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
                          {...register('email')}
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
                          {...register('password')}
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
        Ainda não possui cadastro? <RouterLink to='/register'>Cadastre-se</RouterLink>
     </Box>
   </Flex>
  );
}