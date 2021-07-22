import React from "react";
import { SimpleGrid, Box, HStack, Avatar, Text, Divider } from "@chakra-ui/react";

const PokemonList: React.FC = () => {
  return (
    <>
      <SimpleGrid columns={[2, null, 3]} spacing={10} mt="200">
        <Box bg="gray.800" height="300px" mx="4" p="8" borderRadius={8}>
          <HStack>
            <Avatar size="md" name="limber" />
            <Text>LIMBER</Text>
          </HStack>
          <Divider mt="5" mb="5" />
          <Text mt="2">HABILIDADE: IMPOSTER</Text>
          <Text mt="2">ALTURA: 3M</Text>
          <Text mt="2">TIPO: NORMAL</Text>
        </Box>

        <Box bg="gray.800" height="300px" mx="4" p="8" borderRadius={8}>
          <HStack>
            <Avatar size="md" name="limber" />
            <Text>LIMBER</Text>
          </HStack>
          <Divider mt="5" mb="5" />
          <Text mt="2">HABILIDADE: IMPOSTER</Text>
          <Text mt="2">ALTURA: 3M</Text>
          <Text mt="2">TIPO: NORMAL</Text>
        </Box>

        <Box bg="gray.800" height="300px" mx="4" p="8" borderRadius={8}>
          <HStack>
            <Avatar size="md" name="limber" />
            <Text>LIMBER</Text>
          </HStack>
          <Divider mt="5" mb="5" />
          <Text mt="2">HABILIDADE: IMPOSTER</Text>
          <Text mt="2">ALTURA: 3M</Text>
          <Text mt="2">TIPO: NORMAL</Text>
        </Box>

        <Box bg="gray.800" height="300px" mx="4" p="8" borderRadius={8}>
          <HStack>
            <Avatar size="md" name="limber" />
            <Text>LIMBER</Text>
          </HStack>
          <Divider mt="5" mb="5" />
          <Text mt="2">HABILIDADE: IMPOSTER</Text>
          <Text mt="2">ALTURA: 3M</Text>
          <Text mt="2">TIPO: NORMAL</Text>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default PokemonList;
