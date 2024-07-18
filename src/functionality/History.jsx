import React, { useContext } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Box } from '@chakra-ui/react';
import { ProductContext } from '../context/ProductContext';

function History() {
    const { history } = useContext(ProductContext);

    return (
        <Box mt={8}>
            <Table variant="striped" colorScheme="gray" borderRadius={5} shadow={'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'}>
                <Thead>
                    <Tr>
                        <Th>Product Name</Th>
                        <Th>Category</Th>
                        <Th>Location</Th>
                        <Th>Quantity</Th>
                        <Th>Note</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {history.slice(0, 5).map((entry, index) => (
                        <Tr key={index}>
                            <Td>{entry.products.title}</Td>
                            <Td>{entry.products.category.name}</Td>
                            <Td>{entry.products.location[0] ? entry.products.location[0].name : 'N/A'}</Td>

                            <Td color={entry.quantity < 0 ? '#F56C6C' : '#41B883'}>
                                {entry.quantity}
                            </Td>
                            <Td>{entry.note}</Td>
                        </Tr>
                    ))}
                </Tbody>
                <TableCaption>Last 5 updates</TableCaption>
            </Table>
        </Box>
    );
}

export default History;
