import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaEye,
} from "react-icons/fa";
import { toast } from "react-toastify";

import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const [isWishlisted, setIsWishlisted] = useState(false);

  // Check wishlist when component loads
  useEffect(() => {
    const savedWishlist =
      JSON.parse(
        localStorage.getItem("coffeeWishlist")
      ) || [];

    const exists = savedWishlist.some(
      (item) => item.id === product.id
    );

    setIsWishlisted(exists);
  }, [product.id]);


  // Add to cart
  const handleCart = () => {
    addToCart(product);
  };


  // Wishlist
  const handleWishlist = () => {
    const wishlist =
      JSON.parse(
        localStorage.getItem("coffeeWishlist")
      ) || [];

    const exists = wishlist.some(
      (item) => item.id === product.id
    );


    if (exists) {
      const updatedWishlist = wishlist.filter(
        (item) => item.id !== product.id
      );

      localStorage.setItem(
        "coffeeWishlist",
        JSON.stringify(updatedWishlist)
      );

      setIsWishlisted(false);

      toast.info("Removed from wishlist");
    } else {
      const updatedWishlist = [
        ...wishlist,
        product,
      ];

      localStorage.setItem(
        "coffeeWishlist",
        JSON.stringify(updatedWishlist)
      );

      setIsWishlisted(true);

      toast.success("Added to wishlist ❤️");
    }
  };


  return (
    <div
      className="
        group
        bg-white/60
        backdrop-blur-md
        border
        border-white/50
        rounded-3xl
        overflow-hidden
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >

      {/* Product Image */}
      <div className="relative overflow-hidden">

        <img
          src={product.image}
          alt={product.name}
          className="
            w-full
            h-56
            object-cover
            group-hover:scale-110
            transition-transform
            duration-500
          "
        />


        {/* Discount */}
        {product.oldPrice && (
          <span
            className="
              absolute
              top-4
              left-4
              bg-[#6F4E37]
              text-white
              text-xs
              font-semibold
              px-3
              py-1
              rounded-full
            "
          >
            {Math.round(
              ((product.oldPrice - product.price) /
                product.oldPrice) *
                100
            )}
            % OFF
          </span>
        )}


        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          aria-label="Add to wishlist"
          className="
            absolute
            top-4
            right-4
            w-10
            h-10
            rounded-full
            bg-white/90
            backdrop-blur-sm
            flex
            items-center
            justify-center
            hover:scale-110
            transition
          "
        >
          <FaHeart
            className={`
              transition-colors
              duration-300
              ${
                isWishlisted
                  ? "text-red-500"
                  : "text-gray-500"
              }
            `}
          />
        </button>

      </div>


      {/* Product Information */}
      <div className="p-5">

        <p
          className="
            text-xs
            uppercase
            tracking-wider
            text-[#A66A43]
            font-semibold
          "
        >
          {product.category}
        </p>


        {/* Product Name */}
        <Link
          to={`/product/${product.id}`}
        >
          <h3
            className="
              text-xl
              font-bold
              text-[#3D2B1F]
              mt-1
              hover:text-[#8B5E3C]
              transition
            "
          >
            {product.name}
          </h3>
        </Link>


        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">

          <div className="flex text-sm">

            {[...Array(5)].map(
              (_, index) => (
                <FaStar
                  key={index}
                  className={
                    index <
                    Math.round(
                      product.rating
                    )
                      ? "text-[#E0A24B]"
                      : "text-gray-300"
                  }
                />
              )
            )}

          </div>

          <span className="text-sm text-gray-500">
            ({product.reviews})
          </span>

        </div>


        {/* Price */}
        <div className="flex items-center gap-3 mt-4">

          <span
            className="
              text-2xl
              font-bold
              text-[#6F4E37]
            "
          >
            ₹{product.price}
          </span>

          {product.oldPrice && (
            <span
              className="
                text-sm
                text-gray-400
                line-through
              "
            >
              ₹{product.oldPrice}
            </span>
          )}

        </div>


        {/* Buttons */}
        <div
          className="
            grid
            grid-cols-2
            gap-2
            mt-5
          "
        >

          {/* Add Cart */}
          <button
            onClick={handleCart}
            className="
              flex
              items-center
              justify-center
              gap-2
              bg-[#6F4E37]
              hover:bg-[#4E3525]
              text-white
              py-2.5
              rounded-xl
              text-sm
              font-semibold
              transition
            "
          >
            <FaShoppingCart />

            Add Cart
          </button>


          {/* View */}
          <Link
            to={`/product/${product.id}`}
            className="
              flex
              items-center
              justify-center
              gap-2
              border
              border-[#6F4E37]
              text-[#6F4E37]
              hover:bg-[#6F4E37]
              hover:text-white
              py-2.5
              rounded-xl
              text-sm
              font-semibold
              transition
            "
          >
            <FaEye />

            View
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;