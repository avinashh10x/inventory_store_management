import React, { useContext, useState } from 'react';
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
    Icon,
    VStack,
    HStack,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react';
import { MdAttachMoney, MdCategory } from 'react-icons/md';
import Sidebar from '../components/Sidebar';
import { ProductContext } from '../context/ProductContext';
import { ChevronDownIcon } from '@chakra-ui/icons';
import UpdateStock from '../components/UpdateStock';

function AllProducts() {
    const { products, category } = useContext(ProductContext);
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategorySelect = (catName) => {
        setSelectedCategory(catName);
    };

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category && product.category.name === selectedCategory)
        : products;




    return (
        <>
            <Sidebar />
            <Flex ml="250px" flexDirection="column" p={4} bg="gray.100" minH="100vh">
                <Center mb={6}>
                    <Heading>All Products</Heading>
                </Center>
                <Box bg="white" p={4} borderRadius="md" boxShadow="md">
                    <TableContainer>
                        <Table variant="striped" colorScheme="purple">
                            <Thead>
                                <Tr>
                                    <Th>Title</Th>
                                    <Th>Price</Th>
                                    <Th>
                                        Quantity
                                    </Th>
                                    <Th>
                                        <Menu >
                                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                                {selectedCategory ? selectedCategory : 'CATEGORY'}
                                            </MenuButton>
                                            <MenuList minWidth="150px">
                                                <MenuItem onClick={() => setSelectedCategory('')}>All Categories</MenuItem>
                                                {category.map((cat, index) => (
                                                    <MenuItem key={index} onClick={() => handleCategorySelect(cat.name)}>
                                                        {cat.name}
                                                    </MenuItem>
                                                ))}
                                            </MenuList>
                                        </Menu>
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {filteredProducts.map((product, index) => (
                                    <Tr key={index}>
                                        <Td>{product.title}</Td>
                                        <Td>
                                            <HStack spacing={1}>
                                                <Icon as={MdAttachMoney} />
                                                <Text>{product.price}</Text>
                                            </HStack>
                                        </Td>
                                        <Td>
                                            {product.quantity} units
                                        </Td>
                                        <Td>
                                            <HStack spacing={1}>
                                                <Icon as={MdCategory} />
                                                <Text>{product.category ? product.category.name : 'Unknown'}</Text>
                                            </HStack>
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

export default AllProducts;
