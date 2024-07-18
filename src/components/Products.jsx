import React, { useContext, useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Text, SimpleGrid, Card, CardBody, Heading, Flex, Icon, HStack, VStack } from '@chakra-ui/react';
import { FaBoxesPacking, FaBoxesStacked, FaCubesStacked } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";

import { ProductContext } from '../context/ProductContext';
import { MdAttachMoney, MdCategory } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Products() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { products, fetchProducts } = useContext(ProductContext);

    const openModal = async () => {
        await fetchProducts();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Card maxW='sm' boxShadow='xl'>
                <CardBody>
                    <Heading textAlign={'center'} size='md'> Total Products</Heading>
                    <Flex justify='space-between' align='center' mt={4}>
                        <Link to="/products">
                            <Button variant='ghost'  colorScheme='purple' onClick={openModal}>
                                See All Products
                            </Button>
                        </Link>
                        <Flex align='center'>
                            <Icon as={FaBoxesStacked} boxSize={5} />
                            <Heading size='md' ml={2}>{products.length}</Heading>
                        </Flex>
                    </Flex>
                </CardBody>
            </Card>
        </>
    );
}

export default Products;
