import React from 'react';
import { Flex, VStack, Spacer, Text, Box, Center, Button } from '@chakra-ui/react';
import AddProduct from './AddProduct';
import AddCategory from './AddCategory';
import { Link } from 'react-router-dom';
import UpdateStock from './UpdateStock';

function Sidebar() {
    return (
        <Flex
            w="250px"
            h="100vh"
            color="white"
            bg="purple.500"
            // boxShadow="10px 30px 20px 10px rgba(0, 0, 0, .1)"
            p={4}
            position="fixed"
            left={0}
            top={0}
            flexDirection="column"
            alignItems="center"
            // justifyContent="center"
            textAlign="center"
            zIndex={2}
        >
            <Center h={'15vh'} w="250px">
                <Link to={'/'}>
                    <Text fontSize="4xl" fontWeight="bold" letterSpacing="wide" mb={4}>Inventory Store</Text>
                </Link>
            </Center>
            <VStack spacing={4} align="center" justify="space-between" mt={4} mb={4} h="100%">
                <VStack align="center" spacing={4}>
                    <Link to="/">
                        <Button
                            p={5}
                            // m={2}
                            variant={'ghost'}
                            color={'white'}
                            fontWeight={'bold'}
                            fontSize={'large'}
                            _hover={{ bg: 'purple.700' }}
                        >
                            Home
                        </Button>
                    </Link>
                    <AddProduct />
                    <AddCategory />
                    <Link to="/products">
                        <Button
                            p={5}
                            // m={2}
                            variant={'ghost'}
                            color={'white'}
                            fontWeight={'bold'}
                            fontSize={'large'}
                            _hover={{ bg: 'purple.700' }}
                        >
                            All Products
                        </Button>
                    </Link>
                    <UpdateStock />
                </VStack>
                <VStack align="center" spacing={4}>
                    <AddProduct />
                    <AddCategory />
                </VStack>
            </VStack>
        </Flex>
    );
}

export default Sidebar;
