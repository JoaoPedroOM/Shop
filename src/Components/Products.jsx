import React, { useEffect, useState } from "react";
import fetchProducts from "../api/fetchProducts";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts("iphone").then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <section className="container pt-[120px] px-[20px] pb-[50px] grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]
    ">
      {products.map((product) => (
        <ProductCard key={product.id} data={product}/>
      ))}
    </section>
  );
};

export default Products;
