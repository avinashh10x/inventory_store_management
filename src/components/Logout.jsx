import { Button, useToast } from '@chakra-ui/react';
import React from 'react';
import { MdLogout } from 'react-icons/md';
import { logout } from '../appwrite/Services';

function Logout() {
    const toast = useToast(); // Initialize useToast hook

    const handleLogout = async () => {
        try {
            const response = await logout();
            console.log('logout successfully');

            // Display success toast notification
            toast({
                title: 'Logout successful',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top-right'
            });

        } catch (error) {
            console.log(error);

            // Display error toast notification
            toast({
                title: 'Logout failed',
                description: error.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right'
            });
        }
    };

    return (
        <>
            <Button
                leftIcon={<MdLogout />}
                colorScheme="teal"
                variant="solid"
                w={'100%'}
                onClick={handleLogout}
                mt={3}
            >
                Logout
            </Button>
           
        </>
    );
}

export default Logout;
