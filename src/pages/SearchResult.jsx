import { Box, Card, CardBody, CardHeader, Heading, HStack, VStack, Text, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Button } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import SearchBar from '../functionality/SearchBar';
import { ProductContext } from '../context/ProductContext';

function SearchResult() {
    const { history, fetchHistory } = useContext(ProductContext);

    const location = useLocation();
    const { query } = location.state || {};

    const productId = query.$id;
    const productTransactions = history.filter(transaction => transaction.products.$id === productId);

    useEffect(() => {
        fetchHistory();
    }, []);

    


    return (
        <>
            <Sidebar />
            <Box ml={'250px'} p={4}>
                <Box w="40%" mx="auto">
                    <SearchBar />
                </Box>
                <HStack justifyContent="center" alignItems="baseline" mt={4} mb={4} spacing={2}>
                    <Text fontSize='2xl' color="gray.700" fontWeight="semibold">Search Results for</Text>
                    <Heading size='2xl' color="purple.700">{query.title}</Heading>
                </HStack>

                <VStack spacing={6} p={4} align="stretch">
                    <HStack justify={'space-evenly'} wrap="wrap" spacing={4}>
                        <Box w={{ base: "100%", md: "18%" }}>
                            <Card borderWidth="1px" borderColor={'purple.500'} borderRadius="lg" overflow="hidden" boxShadow="lg">
                                <CardHeader bg="purple.200" p={4}>
                                    <Heading size='md'>Product Name</Heading>
                                </CardHeader>
                                <CardBody p={4}>
                                    <Text fontSize='lg'>{query.title}</Text>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box w={{ base: "100%", md: "18%" }}>
                            <Card borderWidth="1px" borderColor={'purple.500'} borderRadius="lg" overflow="hidden" boxShadow="lg">
                                <CardHeader bg="purple.200" p={4}>
                                    <Heading size='md'>Category</Heading>
                                </CardHeader>
                                <CardBody p={4}>
                                    <Text fontSize='lg'>{query.category.name}</Text>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box w={{ base: "100%", md: "18%" }}>
                            <Card borderWidth="1px" borderColor={'purple.500'} borderRadius="lg" overflow="hidden" boxShadow="lg">
                                <CardHeader bg="purple.200" p={4}>
                                    <Heading size='md'>Stock</Heading>
                                </CardHeader>
                                <CardBody p={4}>
                                    <Text fontSize='lg' color={query.quantity < 100 ? 'red.500' : 'green'} >{productTransactions[0].products.quantity}</Text>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box w={{ base: "100%", md: "18%" }}>
                            <Card borderWidth="1px" borderColor={'purple.500'} borderRadius="lg" overflow="hidden" boxShadow="lg">
                                <CardHeader bg="purple.200" p={4}>
                                    <Heading size='md'>Price</Heading>
                                </CardHeader>
                                <CardBody p={4}>
                                    <Text fontSize='lg'>${query.price}</Text>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box w={{ base: "100%", md: "18%" }}>
                            <Card borderWidth="1px" borderColor={'purple.500'} borderRadius="lg" overflow="hidden" boxShadow="lg">
                                <CardHeader bg="purple.200" p={4}>
                                    <Heading size='md'>Created At</Heading>
                                </CardHeader>
                                <CardBody p={4}>
                                    <Text fontSize='lg'>{new Date(query.$createdAt).toLocaleDateString()} At {new Date(query.$createdAt).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })}</Text>
                                </CardBody>
                            </Card>
                        </Box>
                    </HStack>



                    {/* history */}
                    <Heading size='xl' marginInline={'auto'} color="gray.700" fontWeight="semibold">Transaction History</Heading>
                    <TableContainer>
                        <Table variant="striped" colorScheme="purple">
                            <Thead bg="purple.200">
                                <Tr>
                                    <Th color="purple.700">Product Name</Th>
                                    <Th color="purple.700">Category</Th>
                                    <Th color="purple.700">Quantity</Th>
                                    <Th color="purple.700">Note</Th>
                                    <Th color="purple.700">Time</Th>
                                    <Th color="purple.700">Date</Th>
                                    {/* Add more headers if needed */}
                                </Tr>
                            </Thead>
                            <Tbody>
                                {productTransactions.map((entry, index) => (
                                    <Tr key={index} _hover={{ bg: "purple.50" }}>
                                        <Td>{entry.products.title}</Td>
                                        <Td>{entry.products.category.name}</Td>
                                        <Td color={entry.quantity < 0 ? 'red.500' : 'green.500'}>
                                            {entry.quantity}
                                        </Td>
                                        <Td>{entry.note}</Td>
                                        <Td>{new Date(entry.$createdAt).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })}</Td>
                                        <Td>{new Date(entry.$createdAt).toLocaleDateString()}</Td>
                                        {/* Add more <Td> for additional fields */}
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </VStack>
            </Box>
        </>
    );
}

export default SearchResult;
