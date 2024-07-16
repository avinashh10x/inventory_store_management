import { Button, FormControl, FormErrorIcon, FormErrorMessage, FormHelperText, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import { createProduct } from '../appwrite/Services'

function AddProduct() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { category, fetchProducts } = useContext(ProductContext)
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');



    const handleCreateProduct = async () => {

        const product = {
            title: productName,
            discription: productDescription,
            category: productCategory, // Use the category ID here
            price: parseFloat(productPrice),
            quantity: parseInt(productQuantity)
        };

        try {
            const response = await createProduct(product);
            console.log(response);
            fetchProducts()
            onClose(); // Close the modal after successful creation
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };



    return (
        <>
            <Button
                p={5}
                // m={2}
                onClick={onOpen}
                variant={'ghost'}
                color={'white'}
                fontWeight={'bold'}
                fontSize={'large'}
                _hover={{ bg: 'purple.700' }}
            >
                Add Products
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add new Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl onSubmit={handleCreateProduct}>
                            <FormLabel>First name</FormLabel>
                            <Input
                                placeholder='Enter product name'
                                type='text'
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                            />
                            <FormLabel>Description</FormLabel>
                            <Input
                                placeholder='write a description'
                                type='text'
                                value={productDescription}
                                onChange={(e) => setProductDescription(e.target.value)}
                            />

                            <FormLabel>category</FormLabel>
                            <Select
                                placeholder='Select Category'
                                value={productCategory}
                                onChange={(e) => setProductCategory(e.target.value)}
                            >
                                {category.map((cat) => (
                                    <option key={cat.$id} value={cat.$id}>{cat.name}</option>
                                ))}
                            </Select>

                            <FormLabel>Quantity</FormLabel>
                            <Input
                                placeholder='Quantity'
                                type='number'
                                value={productQuantity}
                                onChange={(e) => setProductQuantity(e.target.value)}
                            />
                            <FormLabel>Price per piece</FormLabel>
                            <Input
                                placeholder='Price '
                                type='number'
                                value={productPrice}
                                onChange={(e) => setProductPrice(e.target.value)}
                            />
                            <FormHelperText>Price must be a positive number</FormHelperText>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost' onClick={handleCreateProduct}>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddProduct