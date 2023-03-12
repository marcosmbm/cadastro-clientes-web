import {useState} from 'react';
import {useForm} from 'react-hook-form'; 
import { useNavigate } from 'react-router-dom';

import {AtSignIcon, EmailIcon, LockIcon} from '@chakra-ui/icons';
import {Flex, Stack, Image, Heading, Box, FormControl, InputGroup, InputLeftElement, Input, Button} from '@chakra-ui/react';

import logo from '../../../assets/logo.png';
import Alerts from '../../../components/Alerts';

import { AlertStatus } from '@chakra-ui/react';

export default function SignUp() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [status,setStatus] = useState<AlertStatus>('error');
  const [message, setMessage] = useState('');

  async function handleRegister(data: any){
    const {name, email, password, passwordConfirm} = data;
  
    setMessage('');

    if(name.trim() === '' || email.trim() === '' || password === '' || passwordConfirm === ''){
      setStatus('info');
      setMessage('Preencha todos os campos!');
      return
    }

    if(password !== passwordConfirm){
      setMessage('As senhas não são iguais.');
      setStatus('error');
      return
    }

    let obj = {
      name,
      email, 
      password
    }

    fetch('http://localhost:3001/v1/sign-up',{
      headers:{
        'Content-Type': 'Application/json'
      },
      method: "post",
      body: JSON.stringify(obj)
    })
    .then(async (response) => {
      const json = await response.json();

      if(response.ok){
        navigate('/', {replace: true});
      }
      else{
        setStatus('error');
        setMessage(json.message)
      }
    })
    .catch((error) => {
      setStatus('error');
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
            Cadastre-se
        </Heading>

        <Box
          minW={{base: '90%', md: '470'}}
        >
          <form onSubmit={handleSubmit(handleRegister)}>
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
                          {...register('name')}
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
                          placeholder="Senha"
                          {...register('password')}
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
                          {...register('passwordConfirm')}
                        />
                    </InputGroup>
                </FormControl>


                <Button type={"submit"} variant="solid" colorScheme="green">
                    Cadastrar
                </Button>

                <Button type={"button"} variant="link" colorScheme="green" onClick={() => navigate('/', {replace: true})}>
                  Voltar
                </Button>
            </Stack>

            {
              message.length > 0 &&
              <Alerts
                message={message}
                status={status}
                closeAlert={() => setMessage('')}
              />
            }
          </form>
        </Box>
     </Stack>
   </Flex>
  );
}