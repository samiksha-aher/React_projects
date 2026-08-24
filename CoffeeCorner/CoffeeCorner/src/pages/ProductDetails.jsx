import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <h1 className="text-3xl font-bold text-[#3D2B1F]">
          Product Not Found
        </h1>

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-[#FFF7F0] p-10">

      <div className="max-w-6xl mx-auto">

        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-xl h-96 object-cover rounded-3xl"
        />

        <h1 className="text-4xl font-bold text-[#3D2B1F] mt-8">
          {product.name}
        </h1>

        <p className="text-[#6F4E37] text-2xl font-bold mt-4">
          ₹{product.price}
        </p>

        <p className="text-gray-600 max-w-2xl mt-5">
          {product.description}
        </p>

      </div>

    </div>
  );
}

export default ProductDetails;