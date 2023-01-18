import React, { useEffect, useState } from "react";
import Products from "../components/app/Products";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [previousUrl, setPreviousUrl] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_END_POINT}api/products/`
        );
        const data = await response.json();
        setNextUrl(data.next);
        setPreviousUrl(data.previous);
        setProducts(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadProduct();
  }, []);

  return (
    <Products
      setNextUrl={setNextUrl}
      setPreviousUrl={setPreviousUrl}
      setProducts={setProducts}
      products={products}
      nextUrl={nextUrl}
      previousUrl={previousUrl}
    />
  );
};

export default AllProducts;
