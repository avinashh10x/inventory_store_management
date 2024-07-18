import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useToast // Import useToast hook
} from '@chakra-ui/react';
import { loginAccount } from '../appwrite/Services';
import { useNavigate } from 'react-router-dom';
import Logout from '../components/Logout';
import { MdLogin } from 'react-icons/md';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast(); // Initialize useToast hook
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleLogin = async () => {
        try {
            // Call loginAccount function with email and password
            const response = await loginAccount(email, password);
            if (response) {
                navigate('/home'); // Navigate to home page on successful login
            }
            // Display success toast notification
            toast({
                title: 'Login successful',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top-right'
            });

        } catch (error) {
            // Display error toast notification
            toast({
                title: 'Login failed',
                description: error.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right'
            });
        }
    };

    return (
        <Box
            minH="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgGradient="linear(to-r, purple.400, purple.800)"
        >
            <Box
                p={8}
                width={{ base: '90%', sm: '80%', md: '50%', lg: '40%' }} // Adjusted width responsively
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg"
                bg="white"
            >
                <Stack spacing={4}>
                    <Heading textAlign="center" size="xl">
                        Login
                    </Heading>
                    <FormControl id="username">
                        <FormLabel>Username</FormLabel>
                        <Input
                            type="text"
                            placeholder="Enter your username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                    <Button 
                    colorScheme="teal"
                     variant="solid" 
                     leftIcon={<MdLogin/>}
                     onClick={handleLogin}>
                        Sign In
                    </Button>
                </Stack>
            <Logout />
            </Box>
        </Box>
    );
}

export default LoginPage;
