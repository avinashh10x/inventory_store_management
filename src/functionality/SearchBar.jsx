import { Box, Button, Flex, FormControl, FormLabel, Input, HStack, IconButton } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { searchProduct } from '../appwrite/Services'
import { ProductContext } from '../context/ProductContext'
import { SearchIcon } from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom'

function SearchBar() {
    const [productName, setProductName] = useState('')

    const { products } = useContext(ProductContext)

    const navigate = useNavigate();

    const productselected = products.filter((product) => product.title === productName)

    const handleSearch = async () => {
        try {
            const idOfProduct = (productselected[0].$id).toString()
            const response = await searchProduct(idOfProduct)
            if (response) {
                navigate('/search', { state: { query: response } })
            }
            console.log(productselected)
        } catch (error) {
            console.log('Error searching product:', error)
            throw error
        }
    }

    return (
        <>
            <Flex align="center">
                <Input
                    placeholder="Search..."
                    variant="filled"
                    flex="1"
                    mr={2}
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch(e);
                        }
                    }}
                    color="purple.500"
                    border="1px solid"
                    borderColor="purple.500"
                    _focus={{
                        borderColor: 'purple.700',
                    }}
                    _hover={{
                        borderColor: 'purple.700',
                    }}
                    _placeholder={{
                        color: 'purple.500',
                    }}
                />
                <IconButton
                    // bgColor={'purple.500'}
                    color={'purple.500'}
                    aria-label="Search database"
                    onClick={handleSearch}
                    icon={<SearchIcon />}
                />

            </Flex>
        </>
    )
}

export default SearchBar
