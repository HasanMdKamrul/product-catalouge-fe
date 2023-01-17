import React, { useEffect, useState } from "react";
import Products from "../components/app/Products";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_END_POINT}api/products/`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadProduct();
  }, []);

  return <Products products={products} />;
};

export default AllProducts;
