import React from 'react'; 

import {Table, Thead, Tr, Th, Tbody, Td, Avatar, Button} from '@chakra-ui/react';

export default function TableItem() {
  return (
   <Table>
     <Thead>
        <Tr>
            <Th>Avatar</Th>
            <Th width={"90%"}>Nome</Th>
            <Th textAlign={"end"}>Ação</Th>
        </Tr>
     </Thead>

     <Tbody>
        <Tr>
            <Td><Avatar bgColor={"green"}/></Td>
            <Td>Marcos Barbosa Miranda dos Santos</Td>
            <Td textAlign={"end"}>
                <Button type='button' variant={'outline'} colorScheme="green">
                    Editar
                </Button>
            </Td>
        </Tr>

        <Tr>
            <Td><Avatar bgColor={"green"}/></Td>
            <Td>Marcos Barbosa Miranda dos Santos</Td>
            <Td textAlign={"end"}>
                <Button type='button' variant={'outline'} colorScheme="green">
                    Editar
                </Button>
            </Td>
        </Tr>

        <Tr>
            <Td><Avatar bgColor={"green"}/></Td>
            <Td>Marcos Barbosa Miranda dos Santos</Td>
            <Td textAlign={"end"}>
                <Button type='button' variant={'outline'} colorScheme="green">
                    Editar
                </Button>
            </Td>
        </Tr>

        <Tr>
            <Td><Avatar bgColor={"green"}/></Td>
            <Td>Marcos Barbosa Miranda dos Santos</Td>
            <Td textAlign={"end"}>
                <Button type='button' variant={'outline'} colorScheme="green">
                    Editar
                </Button>
            </Td>
        </Tr>

        <Tr>
            <Td><Avatar bgColor={"green"}/></Td>
            <Td>Marcos Barbosa Miranda dos Santos</Td>
            <Td textAlign={"end"}>
                <Button type='button' variant={'outline'} colorScheme="green">
                    Editar
                </Button>
            </Td>
        </Tr>
     </Tbody>
   </Table>
  );
}