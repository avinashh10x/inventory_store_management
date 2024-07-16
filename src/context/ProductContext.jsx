import React, { createContext, useState, useEffect } from 'react';
import { listCategory, listProducts } from '../appwrite/Services';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await listProducts();
      setProducts(data.documents); // Assuming 'documents' holds the array of products
      console.log('Products::', data.documents);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await listCategory();
      setCategory(data.documents); 
      console.log('Categories:', data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []); 

  return (
    <ProductContext.Provider value={{ products, fetchProducts, category, fetchCategories }}>
      {children}
    </ProductContext.Provider>
  );
};
