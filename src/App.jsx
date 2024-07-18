import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProducts from './pages/AllProducts.jsx';
import FullHistory from './pages/FullHistory.jsx';
import Profile from './pages/Profile.jsx';
import SearchResult from './pages/SearchResult.jsx';


const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<AllProducts />} />
          <Route exact path="/history" element={<FullHistory />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/search" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>

    </ChakraProvider>
  );
};

export default App;
