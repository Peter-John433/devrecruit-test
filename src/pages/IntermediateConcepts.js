//react import
import { useState, useEffect } from "react";
//components import
import Products from "../components/intermediate/Products";
import LiftState from "../components/intermediate/LiftState";

export default function IntermediateConcepts() {
  const [products, setProducts] = useState([]);

  //fetching a product inside useEffect hook
  useEffect(() => {
    const myProducts = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products`);
        const data = await res.json();
        setProducts(data.products.slice(0, 5));
      } catch (err) {}
    };
    myProducts();
  }, []);

  return (
    <div className="container max-md:px-5 my-10">
      <div>
        <div className="text-xl lg:text-2xl font-bold mt-5 lg:mt-8">
          <span className="text-red-500">Question 3:</span> <br />
          <span>
            Create a simple React component that fetches and displays data from
            an API. Use hooks like useState and useEffect.
          </span>
        </div>
        <div>
          <h3 className="text-lg lg:text-xl font-bold mt-3 lg:mt-3">
            using a fake Api to fetch product data from the server.
          </h3>
          {/* mapped through product here */}
          <ul className="flex flex-col lg:flex-row justify-start items-start lg:items-center max-md:gap-y-5 lg:gap-x-5 mt-10">
            {products.map((product) => (
              <Products key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </div>
      {/* lifting state up */}
      <div>
        <div className="text-xl lg:text-2xl font-bold mt-5 lg:mt-8">
          <span className="text-red-500">Question 4:</span> <br />
          <span>
            Explain the concept of lifting state up in React. Provide an example
            where this is necessary.
          </span>
        </div>
        <LiftState />
      </div>
    </div>
  );
}
