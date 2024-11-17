import Product from "./Product";

export default function Products({ productDetails }) {
  return (
    <div>
      <div className="text-xl lg:text-2xl font-bold mt-5 lg:mt-8">
        <span className="text-red-500">Question 3:</span> <br />
        <span>
          Create a simple React component that fetches and displays data from an
          API. Use hooks like useState and useEffect.
        </span>
      </div>
      <div>
        <h3 className="text-lg lg:text-xl font-bold mt-3 lg:mt-3">
          using a fake Api to fetch product data from the server.
        </h3>
        {/* I mapped through product here */}
        <ul className="flex flex-col lg:flex-row justify-start items-start lg:items-center max-md:gap-y-5 lg:gap-x-5 mt-10">
          {productDetails.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
}
