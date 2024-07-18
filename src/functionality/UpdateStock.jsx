import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Select,
    FormHelperText,
} from '@chakra-ui/react';
import { createHistory, updateProduct } from '../appwrite/Services';

function UpdateStock() {
    const { products, fetchProducts, fetchHistory } = useContext(ProductContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [quantityInput, setQuantityInput] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');
    const [detailsOfSelectedProduct, setDetailsOfSelectedProduct] = useState(null);
    const [note, setNote] = useState('');

    useEffect(() => {
        if (selectedProduct) {
            const selectedProductDetails = products.find((product) => product.$id === selectedProduct);
            setDetailsOfSelectedProduct(selectedProductDetails);
            console.log('Selected Product Details:', selectedProductDetails);
        } else {
            setDetailsOfSelectedProduct(null);
        }
    }, [selectedProduct, products]);
    

    const handleProductSelect = (productId) => {
        setSelectedProduct(productId);
        setQuantityInput('');
    };

    const createStockHistory = async () => {
        const value = {
            products: selectedProduct,
            quantity: parseInt(quantityInput),
            note: note,
        };

        try {
            const response = await createHistory(value);
            console.log('Create History Response:', response);
        } catch (error) {
            console.log(error + ' from create history function from service file');
            throw error;
        }
    };

    const handleSubmit = async () => {
        const updatedQuantity = detailsOfSelectedProduct.quantity + parseInt(quantityInput);

        try {
            const response = await updateProduct(selectedProduct, { quantity: updatedQuantity });
            await createStockHistory();
            console.log('Update Product Response:', response);
            fetchProducts();
            fetchHistory()
            onClose();
            setSelectedProduct('');
            setQuantityInput('');
        } catch (error) {
            console.error('Error updating product:', error);
            // Handle error gracefully, show error message, etc.
        }
    };

    return (
        <>
            <Button
                p={5}
                onClick={onOpen}
                variant={'ghost'}
                color={'white'}
                fontWeight={'bold'}
                fontSize={'large'}
                _hover={{ bg: 'purple.700' }}
            >
                Update Stock
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Stock</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Product Name</FormLabel>
                            <Select
                                value={selectedProduct}
                                onChange={(e) => handleProductSelect(e.target.value)}
                            >
                                <option value="">Select a product</option>
                                {products.map((product) => (
                                    <option key={product.$id} value={product.$id}>
                                        {product.title}
                                    </option>
                                ))}
                            </Select>
                            <FormLabel>Quantity</FormLabel>
                            <Input
                                type="number"
                                value={quantityInput}
                                onChange={(e) => setQuantityInput(e.target.value)}
                            />
                            <FormLabel>Note</FormLabel>
                            <Input
                                type="text"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            />

                            {detailsOfSelectedProduct && (
                                <FormHelperText>Current Quantity: {detailsOfSelectedProduct.quantity}</FormHelperText>
                            )}
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue" ml={3} onClick={handleSubmit}>
                            Update
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default UpdateStock;
