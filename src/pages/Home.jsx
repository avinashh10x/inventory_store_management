import React from 'react'
import Sidebar from '../components/Sidebar'
import AddProduct from '../functionality/AddProduct'
import Category from '../components/Category'
import Products from '../components/Products'
import { Button, Divider, HStack, VStack } from '@chakra-ui/react'
import UpdateStock from '../functionality/UpdateStock'
import Header from '../components/Header'
import History from '../functionality/History'
import GraphChart from '../functionality/GraphChart'
import { getLocation } from '../appwrite/Services'
import Room from '../components/Room'

function Home() {
    return (
        <>
            <Sidebar />
            <Header />
            <VStack ml={'250px'} >
                <HStack justify="space-evenly" marginY={10} w="100%">
                    <Category />
                    <Room/>
                    <Products />
                </HStack>
                <Divider
                    w="80%"     // Set width to 80%
                    borderWidth="2px"
                />
                <HStack justify={'space-evenly'} w={'100%'}>
                    <GraphChart />
                    <History />
                </HStack>
            </VStack>
        </>
    )
}

export default Home