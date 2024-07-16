import { Box, HStack, Spacer, Button, Input, Text, Flex, IconButton } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import React from 'react';
import { FaUserAlt } from "react-icons/fa";

function Header() {
  return (
    <Box h={'15vh'} p={4} color="white">
      <Flex align="center" h="100%">
        <Box>
          <Text fontSize="xx-large" fontWeight="bold">MyApp</Text>
        </Box>
        <Spacer />
        <Box w="40%">
          <Input
            placeholder="Search..."
            bg="white"
            color="purple.700"
            border="1px solid"
            borderColor="purple.500"
          />
        </Box>
        <Spacer />
        <HStack spacing={4}>
          <IconButton
            icon={<SettingsIcon />}
            variant="ghost"
            aria-label="Settings"
            color="purple.500" // This sets the icon color to purple.700
          />
          <IconButton
            icon={<FaUserAlt />}
            // colorScheme="whiteAlpha"
            color="purple.500" // This sets the icon color to purple.700
            variant="ghost"
            // _hover={{ bg: 'purple.700' }}
            aria-label="User"
          />
        </HStack>
      </Flex>
    </Box>
  );
}

export default Header;
