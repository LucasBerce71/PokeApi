import React from 'react';

import { Flex, Text, Icon, Input } from '@chakra-ui/react';
import { CgPokemon, RiSearchLine } from 'react-icons/all';

const Header: React.FC = () => {
  return (
    <Flex 
      as="header"
      align="center" 
      w="100%"
      mt="4"
      mx="auto"
      px="6"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        PokeApi

        <Icon as={CgPokemon} ml="1" />
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxW={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input variant="unstyled" px="4" mr="4" placeholder="Pesquise aqui" />
        <Icon as={RiSearchLine} fontSize="20" cursor="pointer" />
      </Flex>
    </Flex>
  )
}

export default Header;