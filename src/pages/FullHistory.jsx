import React, { useState, useContext } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Heading,
    Center,
    Flex,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Icon,
    HStack,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Sidebar from '../components/Sidebar';
import { ProductContext } from '../context/ProductContext';

function FullHistory() {
    const { category, history, wareHouse } = useContext(ProductContext);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedWareHouse, setSelectedWareHouse] = useState('');

    const handleCategorySelect = (catName) => {
        setSelectedCategory(catName);
    };

    const handleWareHouseSelect = (warehouseName) => {
        setSelectedWareHouse(warehouseName);
    };

    const filteredHistory = history.filter((entry) => {
        const matchesCategory = !selectedCategory || entry.products.category.name === selectedCategory;
        const matchesWarehouse = !selectedWareHouse || entry.products.location.some(loc => loc.name === selectedWareHouse);
        return matchesCategory && matchesWarehouse;
    });

    return (
        <>
            <Sidebar />
            <Flex ml="250px" flexDirection="column" p={4} bg="gray.100" minH="100vh">
                <HStack justify="space-between" mb={6}>
                    <Center w={'90%'}>
                        <Heading>Full History</Heading>
                    </Center>
                    <Menu >
                        <MenuButton mr={5}>
                            {selectedWareHouse ? selectedWareHouse : 'Warehouse'}
                            <Icon as={ChevronDownIcon} />
                        </MenuButton>
                        <MenuList minWidth="150px">
                            <MenuItem onClick={() => setSelectedWareHouse('')}>
                                All Warehouses
                            </MenuItem>
                            {wareHouse &&
                                wareHouse.map((warehouse, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={() => handleWareHouseSelect(warehouse.name)}
                                    >
                                        {warehouse.name}
                                    </MenuItem>
                                ))}
                        </MenuList>
                    </Menu>
                </HStack>

                <Box bg="white" p={4} borderRadius="md" boxShadow="md">
                    <TableContainer>
                        <Table variant="striped" colorScheme="purple">
                            <Thead>
                                <Tr>
                                    <Th>Product Name</Th>
                                    <Th>
                                        <Menu mb={4}>
                                            <MenuButton>
                                                {selectedCategory ? selectedCategory : 'CATEGORY'}
                                                <Icon as={ChevronDownIcon} />
                                            </MenuButton>
                                            <MenuList minWidth="150px">
                                                <MenuItem onClick={() => setSelectedCategory('')}>
                                                    All Categories
                                                </MenuItem>
                                                {category &&
                                                    category.map((cat, index) => (
                                                        <MenuItem
                                                            key={index}
                                                            onClick={() => handleCategorySelect(cat.name)}
                                                        >
                                                            {cat.name}
                                                        </MenuItem>
                                                    ))}
                                            </MenuList>
                                        </Menu>
                                    </Th>
                                    <Th>Quantity</Th>
                                    <Th>Note</Th>
                                    <Th>Time</Th>
                                    <Th>Date</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {filteredHistory.map((entry, index) => (
                                    <Tr key={index}>
                                        <Td>{entry.products.title}</Td>
                                        <Td>{entry.products.category.name}</Td>
                                        <Td color={entry.quantity < 0 ? 'red.500' : 'green'}>
                                            {entry.quantity}
                                        </Td>
                                        <Td>{entry.note}</Td>
                                        <Td>
                                            {new Date(entry.$createdAt).toLocaleTimeString([], {
                                                hour: 'numeric',
                                                minute: '2-digit',
                                                hour12: true,
                                            })}
                                        </Td>
                                        <Td>
                                            {new Date(entry.$createdAt).toLocaleDateString('en-GB', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Flex>
        </>
    );
}

export default FullHistory;
