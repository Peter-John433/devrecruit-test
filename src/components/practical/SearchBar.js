import { useTodoContext } from "../../contextApi/TodoProvider";
import { useState } from "react";

export default function SearchBar() {
  const { tasks } = useTodoContext();
  const [search, setSearch] = useState("");

  const filteredProduct = tasks.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="mb-20">
      <input
        className="w-full lg:w-1/2 placeholder:text-xs me-5 placeholder:text-gray-500  border-[1px] border-gray-300 shadowm-lg outline-none px-3 py-1 text-xs"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search products..."
      />
      <ul className="flex justify-start items-center gap-5 mt-3">
        {filteredProduct.map((product) => (
          <li
            className="bg-black text-white px-3 flex justify-center items-center text-center rounded-md"
            key={product.id}
          >
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
