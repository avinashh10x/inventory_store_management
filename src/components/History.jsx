import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Box } from '@chakra-ui/react';
import { showHistory } from '../appwrite/Services';

function History() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await showHistory();
                console.log(response);
                setHistory(response.documents); // Assuming `documents` is the array of history objects
            } catch (error) {
                console.error('Error fetching history:', error);
            }
        };



        fetchHistory();
    }, []); // Empty dependency array to run only once on mount
    return (
        <Box mt={8}>
            <Table variant="striped" colorScheme="gray">
                <TableCaption>Stock Update History</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Product Name</Th>
                        <Th>Category</Th>
                        <Th>Quantity</Th>
                        <Th>Note</Th>
                        {/* Add more headers if needed */}
                    </Tr>
                </Thead>
                <Tbody>
                    {history.map((entry, index) => (
                        <Tr key={index}>
                            <Td>{entry.products.title}</Td>
                            <Td>{entry.products.category.name}</Td>
                            {/* <Td>{entry.category.name}</Td> */}
                            <Td>{entry.quantity}</Td>
                            <Td>{entry.note}</Td>
                            {/* Add more <Td> for additional fields */}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
}

export default History;
