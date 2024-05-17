import React, { useContext, useEffect, useState } from "react";
import fetchProducts from "../api/fetchProducts";
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import AppContext from "../Context/AppContext";

const Products = () => {
 
  const {products, setProducts, loading, setLoading} = useContext(AppContext);

  useEffect(() => {
    fetchProducts("iphone").then((response) => {
      setProducts(response);
      console.log(response)
      setLoading(false);
    });
  }, []);

  return (
    <section className="container pt-[8rem] px-4 pb-4">
      {loading ? (
        <Loading />
      ) : (
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(230px,1fr))]">
          {products.map((product) => (
            <ProductCard key={product.id} data={product}/>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
