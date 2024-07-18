import { Box, HStack, Spacer, Divider, Flex } from '@chakra-ui/react';
import React from 'react';
import SearchBar from '../functionality/SearchBar';
import ShowRooms from './ShowRooms';

function Header() {
  return (
    <Box h={'15vh'} p={4} ml={'250px'}>
      <Flex align="center" h="100%">
        <Spacer />
        <Box w="40%">
          <SearchBar />
        </Box>
        <Spacer />
        <HStack spacing={4} mr={10}>
          <ShowRooms />
        </HStack>
      </Flex>
      <Divider
        w="80%"     // Set width to 80%
        borderWidth="2px"
        marginInline={'auto'}
      />
    </Box>
  );
}

export default Header;
