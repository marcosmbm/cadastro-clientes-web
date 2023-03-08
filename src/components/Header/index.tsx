import React from 'react';
import {useNavigate} from 'react-router-dom';

import { Flex, Container, Image, Text, Stack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, useDisclosure } from '@chakra-ui/react';

import logo from '../../assets/logo.png';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('@cadastro_clientes');
    navigate('/', {replace: true});
  }

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

          <Stack style={{ marginLeft: 'auto' }}>
            <Button variant={"link"} onClick={onOpen}>Sair</Button>
          </Stack>
        </Stack>
      </Container>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Você tem certeza que deseja sair?</ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Button onClick={onClose} mr={3} type="button">Cancelar</Button>

            <Button colorScheme='green' type="button" onClick={handleLogout}>
              Sair
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}