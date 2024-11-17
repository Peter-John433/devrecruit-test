export default function Product({ product }) {
  return (
    <li className="bg-white w-[150px] p-5">
      <img src={product.images} alt="" />
      <p className="text-xs">{product.title}</p>
      <p></p>
    </li>
  );
}
