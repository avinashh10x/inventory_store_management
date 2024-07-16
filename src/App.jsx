import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProducts from './pages/AllProducts.jsx';


const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<AllProducts />} />
        </Routes>
      </BrowserRouter>

    </ChakraProvider>
  );
};

export default App;
