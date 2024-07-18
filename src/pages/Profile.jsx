import { Center, Flex, Heading, Box, Text, Avatar, VStack } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../components/Sidebar';

function Profile() {
    return (
        <>
            <Sidebar />
            <Flex ml="250px" justify="center" align="center" minH="100vh" bg="gray.100" p={4}>
                <Box
                    bg="white"
                    p={8}
                    borderRadius="md"
                    boxShadow="lg"
                    w="100%"
                    maxW="md"
                    textAlign="center"
                >
                    <VStack spacing={4}>
                        <Avatar size="2xl" name="Your Name" src="https://bit.ly/broken-link" />
                        <Heading size="lg" color="purple.700">Your Name</Heading>
                        <Text fontSize="md" color="gray.600">your.email@example.com</Text>
                        <Text fontSize="md" color="gray.600">Bio: A brief bio about yourself.</Text>
                        <Text fontSize="md" color="gray.600">Location: Your city, Country</Text>
                    </VStack>
                </Box>
            </Flex>
        </>
    );
}

export default Profile;
