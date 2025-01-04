import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
        console.log(products);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {products.map((products) => (
        <div className="flex items-center p-5" key={products.id}>
          <div className="bg-slate-200 rounded-lg p-5">
            <div className="bg-black w-52 h-52"></div>
            <h2 className="font-semibold">Name: {products.name}</h2>
            <p>Price: {products.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
