import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
  FaCreditCard,
  FaMoneyBillWave,
  FaShoppingBag,
} from "react-icons/fa";
import { toast } from "react-toastify";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useCart } from "../context/CartContext";

function Checkout() {
  const navigate = useNavigate();

  const {
    cart,
    subtotal,
    deliveryCharge,
    discount,
    gst,
    grandTotal,
    clearCart,
  } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "Cash on Delivery",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      toast.error("Your cart is empty");
      navigate("/menu");
      return;
    }

    setLoading(true);

    const order = {
      id: `CC-${Date.now()}`,

      customer: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
      },

      address: {
        address: formData.address,
        city: formData.city,
        pincode: formData.pincode,
      },

      items: cart,

      subtotal,
      deliveryCharge,
      discount,
      gst,
      grandTotal,

      paymentMethod: formData.paymentMethod,

      status: "Confirmed",

      date: new Date().toLocaleString(),
    };

    const existingOrders =
      JSON.parse(
        localStorage.getItem("coffeeOrders")
      ) || [];

    const updatedOrders = [
      order,
      ...existingOrders,
    ];

    localStorage.setItem(
      "coffeeOrders",
      JSON.stringify(updatedOrders)
    );

    setTimeout(() => {
      clearCart();

      toast.success(
        "Your order has been placed successfully!"
      );

      navigate(`/order-success/${order.id}`);

      setLoading(false);
    }, 800);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#FFF7F0]">

        <Navbar />

        <div className="
          min-h-[70vh]
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
        ">

          <FaShoppingBag
            className="
              text-6xl
              text-[#A66A43]
              mb-5
            "
          />

          <h1 className="
            text-3xl
            font-bold
            text-[#3D2B1F]
          ">
            Your Cart is Empty
          </h1>

          <p className="text-gray-500 mt-2">
            Add something delicious before checkout.
          </p>

          <button
            onClick={() => navigate("/menu")}
            className="
              mt-6
              bg-[#6F4E37]
              text-white
              px-7
              py-3
              rounded-full
              font-semibold
            "
          >
            Browse Menu
          </button>

        </div>

        <Footer />

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF7F0]">

      <Navbar />

      {/* Header */}
      <section className="
        bg-gradient-to-br
        from-[#3D2B1F]
        to-[#6F4E37]
        text-white
        py-12
      ">

        <div className="
          max-w-7xl
          mx-auto
          px-6
        ">

          <p className="
            text-[#D9A066]
            uppercase
            tracking-[0.25em]
            text-sm
            font-semibold
          ">
            Almost There
          </p>

          <h1 className="
            text-4xl
            sm:text-5xl
            font-bold
            mt-2
          ">
            Checkout
          </h1>

        </div>

      </section>

      <main className="
        max-w-7xl
        mx-auto
        px-6
        py-12
      ">

        <form
          onSubmit={handleSubmit}
          className="
            grid
            lg:grid-cols-3
            gap-8
          "
        >

          {/* Customer Details */}
          <div className="
            lg:col-span-2
            space-y-6
          ">

            {/* Personal Information */}
            <div className="
              bg-white/70
              backdrop-blur-md
              border
              border-[#EFD3B1]
              rounded-3xl
              p-6
              sm:p-8
            ">

              <h2 className="
                text-2xl
                font-bold
                text-[#3D2B1F]
                flex
                items-center
                gap-3
                mb-6
              ">
                <FaUser className="text-[#A66A43]" />
                Customer Information
              </h2>

              <div className="
                grid
                sm:grid-cols-2
                gap-5
              ">

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="
                      w-full
                      border
                      border-[#EFD3B1]
                      rounded-xl
                      px-4
                      py-3
                      outline-none
                      focus:ring-2
                      focus:ring-[#A66A43]
                    "
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter phone number"
                    className="
                      w-full
                      border
                      border-[#EFD3B1]
                      rounded-xl
                      px-4
                      py-3
                      outline-none
                      focus:ring-2
                      focus:ring-[#A66A43]
                    "
                  />
                </div>

                <div className="sm:col-span-2">

                  <label className="block mb-2 font-medium text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter email address"
                    className="
                      w-full
                      border
                      border-[#EFD3B1]
                      rounded-xl
                      px-4
                      py-3
                      outline-none
                      focus:ring-2
                      focus:ring-[#A66A43]
                    "
                  />

                </div>

              </div>

            </div>


            {/* Delivery Address */}
            <div className="
              bg-white/70
              backdrop-blur-md
              border
              border-[#EFD3B1]
              rounded-3xl
              p-6
              sm:p-8
            ">

              <h2 className="
                text-2xl
                font-bold
                text-[#3D2B1F]
                flex
                items-center
                gap-3
                mb-6
              ">
                <FaMapMarkerAlt className="text-[#A66A43]" />
                Delivery Address
              </h2>

              <div className="space-y-5">

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Address
                  </label>

                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows="3"
                    placeholder="House number, street, area..."
                    className="
                      w-full
                      border
                      border-[#EFD3B1]
                      rounded-xl
                      px-4
                      py-3
                      outline-none
                      resize-none
                      focus:ring-2
                      focus:ring-[#A66A43]
                    "
                  />
                </div>

                <div className="
                  grid
                  sm:grid-cols-2
                  gap-5
                ">

                  <div>

                    <label className="block mb-2 font-medium text-gray-700">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="City"
                      className="
                        w-full
                        border
                        border-[#EFD3B1]
                        rounded-xl
                        px-4
                        py-3
                        outline-none
                        focus:ring-2
                        focus:ring-[#A66A43]
                      "
                    />

                  </div>

                  <div>

                    <label className="block mb-2 font-medium text-gray-700">
                      Pincode
                    </label>

                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                      placeholder="Pincode"
                      className="
                        w-full
                        border
                        border-[#EFD3B1]
                        rounded-xl
                        px-4
                        py-3
                        outline-none
                        focus:ring-2
                        focus:ring-[#A66A43]
                      "
                    />

                  </div>

                </div>

              </div>

            </div>


            {/* Payment */}
            <div className="
              bg-white/70
              backdrop-blur-md
              border
              border-[#EFD3B1]
              rounded-3xl
              p-6
              sm:p-8
            ">

              <h2 className="
                text-2xl
                font-bold
                text-[#3D2B1F]
                flex
                items-center
                gap-3
                mb-6
              ">
                <FaCreditCard className="text-[#A66A43]" />
                Payment Method
              </h2>

              <div className="space-y-3">

                <label className="
                  flex
                  items-center
                  gap-4
                  border
                  border-[#EFD3B1]
                  rounded-xl
                  p-4
                  cursor-pointer
                  hover:bg-[#FFF7F0]
                ">

                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Cash on Delivery"
                    checked={
                      formData.paymentMethod ===
                      "Cash on Delivery"
                    }
                    onChange={handleChange}
                  />

                  <FaMoneyBillWave
                    className="text-[#6F4E37]"
                  />

                  <div>
                    <p className="font-semibold">
                      Cash on Delivery
                    </p>

                    <p className="text-sm text-gray-500">
                      Pay when your order arrives
                    </p>
                  </div>

                </label>


                <label className="
                  flex
                  items-center
                  gap-4
                  border
                  border-[#EFD3B1]
                  rounded-xl
                  p-4
                  cursor-pointer
                  hover:bg-[#FFF7F0]
                ">

                  <input
                    type="radio"
                    name="paymentMethod"
                    value="UPI"
                    checked={
                      formData.paymentMethod === "UPI"
                    }
                    onChange={handleChange}
                  />

                  <FaCreditCard
                    className="text-[#6F4E37]"
                  />

                  <div>
                    <p className="font-semibold">
                      UPI
                    </p>

                    <p className="text-sm text-gray-500">
                      Google Pay / PhonePe / Paytm
                    </p>
                  </div>

                </label>

              </div>

            </div>

          </div>


          {/* Order Summary */}
          <div>

            <div className="
              bg-white/80
              backdrop-blur-md
              border
              border-[#EFD3B1]
              rounded-3xl
              p-6
              sticky
              top-28
            ">

              <h2 className="
                text-2xl
                font-bold
                text-[#3D2B1F]
                mb-6
              ">
                Order Summary
              </h2>


              {/* Items */}
              <div className="space-y-4 mb-6">

                {cart.map((item) => (

                  <div
                    key={item.id}
                    className="
                      flex
                      gap-3
                      items-center
                    "
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        w-16
                        h-16
                        rounded-xl
                        object-cover
                      "
                    />

                    <div className="flex-1">

                      <p className="
                        font-semibold
                        text-[#3D2B1F]
                      ">
                        {item.name}
                      </p>

                      <p className="
                        text-sm
                        text-gray-500
                      ">
                        {item.quantity} × ₹{item.price}
                      </p>

                    </div>

                    <span className="font-semibold">
                      ₹{item.price * item.quantity}
                    </span>

                  </div>

                ))}

              </div>


              <div className="
                border-t
                border-[#EFD3B1]
                pt-5
                space-y-3
              ">

                <div className="
                  flex
                  justify-between
                  text-gray-600
                ">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="
                  flex
                  justify-between
                  text-gray-600
                ">
                  <span>Delivery</span>

                  <span>
                    {deliveryCharge === 0
                      ? "FREE"
                      : `₹${deliveryCharge}`}
                  </span>
                </div>

                <div className="
                  flex
                  justify-between
                  text-gray-600
                ">
                  <span>GST</span>
                  <span>₹{gst}</span>
                </div>

                {discount > 0 && (
                  <div className="
                    flex
                    justify-between
                    text-green-600
                  ">
                    <span>Discount</span>
                    <span>-₹{discount}</span>
                  </div>
                )}

                <div className="
                  border-t
                  border-[#EFD3B1]
                  pt-4
                  flex
                  justify-between
                  text-xl
                  font-bold
                  text-[#3D2B1F]
                ">
                  <span>Total</span>
                  <span>₹{grandTotal}</span>
                </div>

              </div>


              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  mt-7
                  bg-[#6F4E37]
                  hover:bg-[#4E3525]
                  disabled:opacity-60
                  text-white
                  py-4
                  rounded-xl
                  font-bold
                  transition
                "
              >
                {loading
                  ? "Placing Order..."
                  : `Place Order • ₹${grandTotal}`}
              </button>

            </div>

          </div>

        </form>

      </main>

      <Footer />

    </div>
  );
}

export default Checkout;