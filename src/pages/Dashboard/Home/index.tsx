import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  Flex,
  Container,
  Stack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  Text
} from '@chakra-ui/react';
import { AtSignIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons';

import Header from '../../../components/Header';
import SearchBar from '../../../components/SearchBar';
import TableItem from './TableItem';
import Alerts from '../../../components/Alerts';

import { AlertStatus } from '@chakra-ui/react';


export type Client = {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function Home() {

  const {register, handleSubmit, setValue} = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const [clients, setClients] = useState<Client[]>([]);
  const [editingClient, setEditinClient] = useState<Client | null>(null);
  const [user,setUser] = useState<any | null>(null);
  
  const [status, setStatus] = useState<AlertStatus>('loading');
  const [message, setMessage] = useState('Carregando usuário');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadUser(){
      await fetch('http://localhost:3001/v1/users/me',{
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('@cadastro_clientes')}`
        }
      })
      .then(async (response) => {
        const json = await response.json();

        if(response.ok){
          setUser(json.user);
        }
        else{
          localStorage.removeItem('@cadastro_clientes');
          navigate('/', {replace: true});
        }
      })
      .catch((error) =>{
        localStorage.removeItem('@cadastro_clientes');
        navigate('/', {replace: true});
      })
      .finally(() =>{
         setIsLoading(false);
      })
    }
    loadUser();

    return () => {
      setUser(null);
    }
  }, [navigate]);

  function saveItem(data: any){
    const arrCopy = [...clients];

    if(editingClient){
      arrCopy.splice(clients.indexOf(editingClient), 1);
      data.id = editingClient.id;
    }
    else{
      data.id = Date.now();
    }
    arrCopy.push(data);
    arrCopy.sort((a, b) =>{
      return a.name.localeCompare(b.name)
    });

    setClients(arrCopy);
    onClose();
    
    setValue('name', '');
    setValue('email', '');
    setValue('phone', '');
  }

  function editItem(client: Client){
    setEditinClient(client);

    setValue('name', client.name);
    setValue('email', client.email);
    setValue('phone', client.phone);

    onOpen();
  }
  
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
        {
          isLoading ?
          (
            <Alerts
              status={status}
              message={message}
            />
          )
          :
          (
            <Stack>
              <Text>{user?.name || ''}</Text>
    
              <SearchBar />
    
              <Flex
                justifyContent={"flex-end"}
              >
                <Button type={'submit'} variant="solid" colorScheme={"green"} onClick={onOpen}>
                  Adicionar
                </Button>
              </Flex>
    
              <TableItem 
                clients={clients}
                onEditing={editItem}
              />
            </Stack>
          )
        }

        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cadastrar Cliente</ModalHeader>
            <ModalCloseButton />

            <form onSubmit={handleSubmit(saveItem)}>
              <ModalBody pb={6}>
                <Stack>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents={"none"}
                      children={<AtSignIcon color="gray.300" />}
                    />

                    <Input type={"text"} placeholder="Nome Completo" {...register('name')}/>
                  </InputGroup>

                  <InputGroup>
                    <InputLeftElement
                      pointerEvents={"none"}
                      children={<EmailIcon color="gray.300" />}
                    />

                    <Input type={"email"} placeholder="Endereço de Email" {...register('email')}/>
                  </InputGroup>

                  <InputGroup>
                    <InputLeftElement
                      pointerEvents={"none"}
                      children={<PhoneIcon color="gray.300" />}
                    />

                    <Input type={"text"} placeholder="Telefone" {...register('phone')}/>
                  </InputGroup>
                </Stack>
              </ModalBody>

              <ModalFooter>
                <Button onClick={onClose} mr={3} type="button">Cancelar</Button>

                <Button colorScheme='green' type="submit">
                  Salvar
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </Container>
    </Flex>
  );
}