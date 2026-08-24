import { useEffect, useState } from "react";
import { FaHeart, FaTrash, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useCart } from "../context/CartContext";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  const { addToCart } = useCart();


  // Load wishlist
  useEffect(() => {
    const savedWishlist =
      JSON.parse(
        localStorage.getItem("coffeeWishlist")
      ) || [];

    setWishlist(savedWishlist);
  }, []);


  // Remove wishlist item
  const removeFromWishlist = (id) => {
    const updatedWishlist =
      wishlist.filter(
        (item) => item.id !== id
      );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "coffeeWishlist",
      JSON.stringify(updatedWishlist)
    );

    toast.info("Removed from wishlist");
  };


  // Add wishlist product to cart
  const handleAddToCart = (product) => {
    addToCart(product);
  };


  // Clear wishlist
  const clearWishlist = () => {
    setWishlist([]);

    localStorage.removeItem(
      "coffeeWishlist"
    );

    toast.info("Wishlist cleared");
  };


  return (
    <div className="min-h-screen bg-[#FFF7F0]">

      <Navbar />


      {/* Header */}
      <section
        className="
          bg-gradient-to-br
          from-[#3D2B1F]
          to-[#6F4E37]
          text-white
          py-14
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            text-center
          "
        >

          <FaHeart
            className="
              text-red-400
              text-4xl
              mx-auto
              mb-4
            "
          />

          <h1
            className="
              text-4xl
              sm:text-5xl
              font-bold
            "
          >
            My Wishlist
          </h1>

          <p className="text-white/70 mt-3">
            Your favorite CoffeeCorner treats
          </p>

        </div>

      </section>


      {/* Content */}
      <main
        className="
          max-w-7xl
          mx-auto
          px-6
          py-12
        "
      >

        {wishlist.length > 0 ? (

          <>
            {/* Top bar */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                justify-between
                items-center
                gap-4
                mb-8
              "
            >

              <p className="text-gray-600">
                You have{" "}
                <span
                  className="
                    font-bold
                    text-[#6F4E37]
                  "
                >
                  {wishlist.length}
                </span>{" "}
                favorite
                {wishlist.length !== 1
                  ? "s"
                  : ""}
              </p>


              <button
                onClick={clearWishlist}
                className="
                  flex
                  items-center
                  gap-2
                  text-red-500
                  hover:text-red-700
                  font-semibold
                "
              >
                <FaTrash />

                Clear Wishlist
              </button>

            </div>


            {/* Products */}
            <div
              className="
                grid
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-6
              "
            >

              {wishlist.map((product) => (

                <div
                  key={product.id}
                  className="
                    bg-white/70
                    backdrop-blur-md
                    border
                    border-[#EFD3B1]
                    rounded-3xl
                    overflow-hidden
                    shadow-md
                    hover:shadow-xl
                    transition
                  "
                >

                  {/* Image */}
                  <div className="relative">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="
                        w-full
                        h-52
                        object-cover
                      "
                    />


                    {/* Remove */}
                    <button
                      onClick={() =>
                        removeFromWishlist(
                          product.id
                        )
                      }
                      className="
                        absolute
                        top-3
                        right-3
                        w-10
                        h-10
                        rounded-full
                        bg-white/90
                        flex
                        items-center
                        justify-center
                        text-red-500
                        hover:bg-red-500
                        hover:text-white
                        transition
                      "
                    >
                      <FaTrash />
                    </button>

                  </div>


                  {/* Details */}
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


                    <Link
                      to={`/product/${product.id}`}
                    >
                      <h2
                        className="
                          text-xl
                          font-bold
                          text-[#3D2B1F]
                          mt-1
                          hover:text-[#8B5E3C]
                        "
                      >
                        {product.name}
                      </h2>
                    </Link>


                    <div className="mt-3">

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
                            ml-3
                            text-sm
                            text-gray-400
                            line-through
                          "
                        >
                          ₹{product.oldPrice}
                        </span>
                      )}

                    </div>


                    <button
                      onClick={() =>
                        handleAddToCart(
                          product
                        )
                      }
                      className="
                        w-full
                        mt-5
                        flex
                        items-center
                        justify-center
                        gap-2
                        bg-[#6F4E37]
                        hover:bg-[#4E3525]
                        text-white
                        py-3
                        rounded-xl
                        font-semibold
                        transition
                      "
                    >
                      <FaShoppingCart />

                      Add to Cart
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </>

        ) : (

          /* Empty Wishlist */
          <div
            className="
              min-h-[450px]
              flex
              flex-col
              items-center
              justify-center
              text-center
              bg-white/60
              backdrop-blur-md
              rounded-3xl
              border
              border-[#EFD3B1]
              px-6
            "
          >

            <div
              className="
                w-24
                h-24
                rounded-full
                bg-[#F8EBDD]
                flex
                items-center
                justify-center
                mb-6
              "
            >

              <FaHeart
                className="
                  text-4xl
                  text-[#A66A43]
                "
              />

            </div>


            <h2
              className="
                text-3xl
                font-bold
                text-[#3D2B1F]
              "
            >
              Your Wishlist is Empty
            </h2>


            <p
              className="
                text-gray-500
                mt-3
                max-w-md
              "
            >
              Save your favorite coffee, tea,
              snacks and desserts here.
            </p>


            <Link
              to="/menu"
              className="
                mt-7
                bg-[#6F4E37]
                hover:bg-[#4E3525]
                text-white
                px-7
                py-3
                rounded-full
                font-semibold
                transition
              "
            >
              Explore Menu
            </Link>

          </div>

        )}

      </main>


      <Footer />

    </div>
  );
}

export default Wishlist;