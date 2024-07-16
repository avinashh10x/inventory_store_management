import React from 'react'
import Sidebar from '../components/Sidebar'
import AddProduct from '../components/AddProduct'
import Category from '../components/Category'
import Products from '../components/Products'
import { Divider, HStack, VStack } from '@chakra-ui/react'
import UpdateStock from '../components/UpdateStock'
import Header from '../components/Header'
import History from '../components/History'

function Home() {
    return (
        <>
            <Sidebar />
            <Header />
            <VStack ml={'250px'} >
                <HStack justify="space-evenly" marginY={10} w="100%">
                    <Category />
                    <Category />
                    <Products />
                </HStack>
                <Divider
                    w="80%"     // Set width to 80%
                    borderWidth="2px"
                />
                <History/>
            </VStack>
        </>
    )
}

export default Home