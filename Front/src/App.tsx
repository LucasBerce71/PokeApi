import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

import Header from './components/Header';
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <PokemonList />
    </ChakraProvider>
  );
}

export default App;
