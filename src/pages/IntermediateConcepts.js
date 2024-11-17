//react import
import { useState, useEffect } from "react";
//components import
import Products from "../components/intermediate/Products";
import LiftState from "../components/intermediate/LiftState";

export default function IntermediateConcepts() {
  const [productDetails, setProductDetails] = useState([]);

  //fetching a product inside useEffect hook
  useEffect(() => {
    const myProducts = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products`);
        const data = await res.json();
        setProductDetails(data.products.slice(0, 5));
      } catch (err) {}
    };
    myProducts();
  }, []);

  return (
    <div className="container max-md:px-5 my-10">
      <Products productDetails={productDetails} />
      <LiftState />
    </div>
  );
}
