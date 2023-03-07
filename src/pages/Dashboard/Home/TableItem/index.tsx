import React from 'react';

import { Table, Thead, Tr, Th, Tbody, Td, Avatar, Button, Box, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';

import { Client } from '..';

export interface TableItemProps {
    clients: Client[];
    onEditing: (client: Client) => void;
}

export default function TableItem({ clients, onEditing }: TableItemProps) {
    return (
        <Box
            backgroundColor={"whiteAlpha.900"}
            boxShadow="md"
            borderRadius={"md"}
            p={"1rem"}
        >
            {
                clients.length === 0 ?
                    <Alert status='info'>
                        <AlertIcon />
                        <AlertTitle>Não existem itens para exibir</AlertTitle>
                    </Alert>
                    :
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Avatar</Th>
                                <Th width={"90%"}>Nome</Th>
                                <Th textAlign={"end"}>Ação</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {
                                clients.map((item) => {
                                    return (
                                        <Tr key={item.id}>
                                            <Td><Avatar bgColor={"green"} /></Td>
                                            <Td>{item.name}</Td>
                                            <Td textAlign={"end"}>
                                                <Button type='button' variant={'outline'} colorScheme="green" onClick={() => onEditing(item)}>
                                                    Editar
                                                </Button>
                                            </Td>
                                        </Tr>
                                    )
                                })
                            }
                        </Tbody>
                    </Table>
            }
        </Box>
    );
}