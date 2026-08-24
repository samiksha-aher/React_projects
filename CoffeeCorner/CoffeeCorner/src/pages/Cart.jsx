import { Link } from "react-router-dom";

import {
  FaMinus,
  FaPlus,
  FaTrash,
  FaArrowLeft,
  FaShoppingBag,
} from "react-icons/fa";

import Navbar from "../components/layout/Navbar";

import { useCart } from "../context/CartContext";

import { useNavigate } from "react-router-dom";


function Cart() {

  const navigate = useNavigate();

  const {

    cart,

    cartCount,

    subtotal,

    deliveryCharge,

    discount,

    gst,

    grandTotal,

    increaseQuantity,

    decreaseQuantity,

    removeFromCart,

  } = useCart();


  if (cart.length === 0) {

    return (

      <div className="min-h-screen bg-[#FFF7F0]">

        <Navbar />

        <div
          className="
            min-h-[70vh]
            flex
            flex-col
            items-center
            justify-center
            px-6
          "
        >

          <div
            className="
              w-24
              h-24
              rounded-full
              bg-[#EFD3B1]
              flex
              items-center
              justify-center
              text-[#6F4E37]
              text-4xl
            "
          >

            <FaShoppingBag />

          </div>


          <h1
            className="
              text-3xl
              font-bold
              text-[#3D2B1F]
              mt-6
            "
          >

            Your Cart is Empty

          </h1>


          <p className="text-gray-500 mt-2">

            Looks like you haven't added
            anything yet.

          </p>


          <Link
            to="/menu"
            className="
              mt-6
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

      </div>

    );

  }


  return (

    <div className="min-h-screen bg-[#FFF7F0]">

      <Navbar />


      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Header */}

        <div className="mb-10">

          <Link
            to="/menu"
            className="
              flex
              items-center
              gap-2
              text-[#6F4E37]
              hover:text-[#A66A43]
              font-medium
              mb-4
            "
          >

            <FaArrowLeft />

            Continue Shopping

          </Link>


          <h1
            className="
              text-4xl
              font-bold
              text-[#3D2B1F]
            "
          >

            Your Cart

          </h1>


          <p className="text-gray-500 mt-2">

            {cartCount} item
            {cartCount !== 1 ? "s" : ""} in your cart

          </p>

        </div>


        <div
          className="
            grid
            lg:grid-cols-3
            gap-8
            items-start
          "
        >

          {/* Cart Items */}

          <div className="lg:col-span-2 space-y-4">

            {cart.map((item) => (

              <div
                key={item.id}
                className="
                  bg-white/70
                  backdrop-blur-md
                  rounded-2xl
                  p-4
                  shadow-sm
                  border
                  border-[#EFD3B1]
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                "
              >

                {/* Image */}

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-full
                    sm:w-32
                    h-32
                    object-cover
                    rounded-xl
                  "
                />


                {/* Info */}

                <div className="flex-1">

                  <p
                    className="
                      text-xs
                      uppercase
                      text-[#A66A43]
                      font-semibold
                    "
                  >

                    {item.category}

                  </p>


                  <h2
                    className="
                      text-xl
                      font-bold
                      text-[#3D2B1F]
                      mt-1
                    "
                  >

                    {item.name}

                  </h2>


                  <p
                    className="
                      text-lg
                      font-bold
                      text-[#6F4E37]
                      mt-2
                    "
                  >

                    ₹{item.price}

                  </p>


                  {/* Quantity */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      mt-4
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        border
                        border-[#D9A066]
                        rounded-lg
                        overflow-hidden
                      "
                    >

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        className="
                          w-9
                          h-9
                          flex
                          items-center
                          justify-center
                          hover:bg-[#EFD3B1]
                        "
                      >

                        <FaMinus />

                      </button>


                      <span
                        className="
                          w-10
                          text-center
                          font-semibold
                        "
                      >

                        {item.quantity}

                      </span>


                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        className="
                          w-9
                          h-9
                          flex
                          items-center
                          justify-center
                          hover:bg-[#EFD3B1]
                        "
                      >

                        <FaPlus />

                      </button>

                    </div>


                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="
                        text-red-500
                        hover:text-red-700
                        flex
                        items-center
                        gap-2
                        text-sm
                      "
                    >

                      <FaTrash />

                      Remove

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* Price Summary */}

          <div
            className="
              bg-white/80
              backdrop-blur-md
              rounded-2xl
              p-6
              shadow-lg
              border
              border-[#EFD3B1]
              lg:sticky
              lg:top-28
            "
          >

            <h2
              className="
                text-2xl
                font-bold
                text-[#3D2B1F]
                mb-6
              "
            >

              Price Details

            </h2>


            <div className="space-y-4">

              <div className="flex justify-between">

                <span className="text-gray-600">
                  Subtotal
                </span>

                <span className="font-semibold">
                  ₹{subtotal}
                </span>

              </div>


              <div className="flex justify-between">

                <span className="text-gray-600">
                  Delivery
                </span>

                <span
                  className={
                    deliveryCharge === 0
                      ? "text-green-600 font-semibold"
                      : "font-semibold"
                  }
                >

                  {deliveryCharge === 0
                    ? "FREE"
                    : `₹${deliveryCharge}`}

                </span>

              </div>


              <div className="flex justify-between">

                <span className="text-gray-600">
                  GST
                </span>

                <span className="font-semibold">
                  ₹{gst}
                </span>

              </div>


              {discount > 0 && (

                <div className="flex justify-between text-green-600">

                  <span>
                    Discount
                  </span>

                  <span>
                    -₹{discount}
                  </span>

                </div>

              )}


              <div
                className="
                  border-t
                  border-gray-200
                  pt-4
                  flex
                  justify-between
                  text-lg
                "
              >

                <span className="font-bold">
                  Grand Total
                </span>

                <span
                  className="
                    font-bold
                    text-[#6F4E37]
                  "
                >

                  ₹{grandTotal}

                </span>

              </div>

            </div>

              <button
  onClick={() => navigate("/checkout")}
  className="
    w-full
    bg-[#6F4E37]
    hover:bg-[#4E3525]
    text-white
    py-3.5
    rounded-xl
    font-semibold
    transition
  "
>
  Proceed to Checkout
</button>


            <p
              className="
                text-center
                text-xs
                text-gray-500
                mt-4
              "
            >

              Free delivery on orders above ₹500

            </p>

          </div>

        </div>

      </main>

    </div>

  );

}

export default Cart;