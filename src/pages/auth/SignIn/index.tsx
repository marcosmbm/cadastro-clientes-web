import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { Flex, Stack, Image, Heading, Box, FormControl, InputGroup, InputLeftElement, Input, FormHelperText, Link, Button } from '@chakra-ui/react';

import logo from '../../../assets/logo.png';
import RouterLink from '../../../components/RouterLink';
import Alerts from '../../../components/Alerts';

import { AlertStatus } from '@chakra-ui/react';


export default function SignIn() {

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [message, setMessage] = useState('');
  const [status,setStatus] = useState<AlertStatus>('error');

  async function handleLogin(data: any) {
    setMessage('');

    if(data.email.trim() === '' || data.password.trim() === ''){
      setStatus('info');
      setMessage('Preencha todos os campos!');
      return
    }

    await fetch('http://localhost:3001/v1/sign-in', {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(async (response) => {
        const json = await response.json();

        if (response.ok) {
          localStorage.setItem('@cadastro_clientes', json.token);
          navigate('/dashboard', { replace: true });
        }
        else {
          setStatus('error')
          setMessage(json.message)
        }
      })
      .catch((error) => {
        setStatus('error')
        setMessage(error);
      })
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
          minW={{ base: '90%', md: '470' }}
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
                    children={<EmailIcon color={"gray.300"} />}
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
                    children={<LockIcon color={"gray.300"} />}
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

            {
              message.length > 0 &&
                <Alerts
                  status={status}
                  message={message}
                  closeAlert={() => setMessage('')}
                />
            }

          </form>
        </Box>
      </Stack>

      <Box>
        Ainda não possui cadastro? <RouterLink to='/register'>Cadastre-se</RouterLink>
      </Box>
    </Flex>
  );
}