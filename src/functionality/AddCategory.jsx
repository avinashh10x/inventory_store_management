import React, { useContext, useState } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    useToast
} from '@chakra-ui/react';
import { ProductContext } from '../context/ProductContext';
import { db } from '../appwrite/appwriteService';

function AddCategory() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [categoryName, setCategoryName] = useState('');
    const { fetchCategories, user } = useContext(ProductContext);
    const toast = useToast();

    const handleCreateCategory = async (e) => {
        e.preventDefault();
        if (!categoryName) {
            toast({
                title: 'Error',
                description: 'Category name is required.',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
                variant: 'left-accent'
            });
            return;
        }

        const data = {
            name: categoryName,
            userId: user.$id
        };

        try {
            await db.categories.create(data);
            fetchCategories();
            onClose();
            setCategoryName('');
            toast({
                title: 'Category Created',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
                variant: 'left-accent'
            });
        } catch (error) {
            console.error('Error creating category:', error);
            toast({
                title: 'Error',
                description: 'Failed to create category.',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
                variant: 'left-accent'
            });
        }
    };

    return (
        <>
            <Button onClick={onOpen} variant="ghost" color="white" fontWeight="bold" fontSize="large" _hover={{ bg: 'purple.700' }}>
                Add Category
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Category</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleCreateCategory}>
                            <FormControl>
                                <FormLabel>Category Name</FormLabel>
                                <Input
                                    placeholder="Enter category name"
                                    type="text"
                                    value={categoryName}
                                    onChange={(e) => setCategoryName(e.target.value)}
                                />
                            </FormControl>
                            <ModalFooter>
                                <Button colorScheme="blue" mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                <Button type="submit" variant="ghost">
                                    Create
                                </Button>
                            </ModalFooter>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default AddCategory;
