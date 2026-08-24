import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaPhone,
  FaCreditCard,
  FaCheckCircle,
  FaBoxOpen,
} from "react-icons/fa";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function OrderDetails() {
  const { orderId } = useParams();

  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrders =
      JSON.parse(
        localStorage.getItem("coffeeOrders")
      ) || [];

    const foundOrder = savedOrders.find(
      (item) => item.id === orderId
    );

    setOrder(foundOrder);
  }, [orderId]);


  if (!order) {
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
        ">

          <FaBoxOpen
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
            Order Not Found
          </h1>

          <Link
            to="/orders"
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
            Back to Orders
          </Link>

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

          <Link
            to="/orders"
            className="
              inline-flex
              items-center
              gap-2
              text-white/80
              hover:text-white
              mb-6
            "
          >
            <FaArrowLeft />
            Back to Orders
          </Link>

          <p className="
            text-[#D9A066]
            uppercase
            tracking-wider
            text-sm
          ">
            Order Details
          </p>

          <h1 className="
            text-3xl
            sm:text-4xl
            font-bold
            mt-2
          ">
            {order.id}
          </h1>

        </div>

      </section>


      <main className="
        max-w-7xl
        mx-auto
        px-6
        py-12
      ">

        <div className="
          grid
          lg:grid-cols-3
          gap-8
        ">


          {/* Left */}
          <div className="
            lg:col-span-2
            space-y-6
          ">


            {/* Status */}
            <div className="
              bg-white/70
              backdrop-blur-md
              border
              border-[#EFD3B1]
              rounded-3xl
              p-6
            ">

              <div className="
                flex
                items-center
                gap-3
              ">

                <FaCheckCircle
                  className={`
                    text-3xl
                    ${
                      order.status === "Cancelled"
                        ? "text-red-500"
                        : "text-green-500"
                    }
                  `}
                />

                <div>

                  <h2 className="
                    text-xl
                    font-bold
                    text-[#3D2B1F]
                  ">
                    {order.status}
                  </h2>

                  <p className="
                    text-sm
                    text-gray-500
                  ">
                    Ordered on {order.date}
                  </p>

                </div>

              </div>

            </div>


            {/* Items */}
            <div className="
              bg-white/70
              backdrop-blur-md
              border
              border-[#EFD3B1]
              rounded-3xl
              p-6
            ">

              <h2 className="
                text-2xl
                font-bold
                text-[#3D2B1F]
                mb-6
              ">
                Ordered Items
              </h2>

              <div className="space-y-5">

                {order.items.map((item) => (

                  <div
                    key={item.id}
                    className="
                      flex
                      items-center
                      gap-4
                      border-b
                      border-[#EFD3B1]
                      pb-5
                    "
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        w-20
                        h-20
                        rounded-xl
                        object-cover
                      "
                    />

                    <div className="flex-1">

                      <h3 className="
                        font-bold
                        text-[#3D2B1F]
                      ">
                        {item.name}
                      </h3>

                      <p className="
                        text-sm
                        text-gray-500
                        mt-1
                      ">
                        Quantity: {item.quantity}
                      </p>

                      <p className="
                        text-sm
                        text-gray-500
                      ">
                        ₹{item.price} each
                      </p>

                    </div>

                    <p className="
                      font-bold
                      text-[#6F4E37]
                    ">
                      ₹{item.price * item.quantity}
                    </p>

                  </div>

                ))}

              </div>

            </div>


            {/* Delivery */}
            <div className="
              bg-white/70
              backdrop-blur-md
              border
              border-[#EFD3B1]
              rounded-3xl
              p-6
            ">

              <h2 className="
                text-2xl
                font-bold
                text-[#3D2B1F]
                mb-6
              ">
                Delivery Information
              </h2>

              <div className="
                grid
                sm:grid-cols-2
                gap-5
              ">

                <div className="flex gap-3">

                  <FaMapMarkerAlt
                    className="
                      text-[#A66A43]
                      mt-1
                    "
                  />

                  <div>

                    <p className="
                      text-sm
                      text-gray-500
                    ">
                      Delivery Address
                    </p>

                    <p className="
                      font-semibold
                      text-[#3D2B1F]
                      mt-1
                    ">
                      {order.address.address}
                    </p>

                    <p className="
                      text-gray-600
                    ">
                      {order.address.city} -{" "}
                      {order.address.pincode}
                    </p>

                  </div>

                </div>


                <div className="flex gap-3">

                  <FaPhone
                    className="
                      text-[#A66A43]
                      mt-1
                    "
                  />

                  <div>

                    <p className="
                      text-sm
                      text-gray-500
                    ">
                      Contact
                    </p>

                    <p className="
                      font-semibold
                      text-[#3D2B1F]
                      mt-1
                    ">
                      {order.customer.name}
                    </p>

                    <p className="text-gray-600">
                      {order.customer.phone}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* Summary */}
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
                Payment Summary
              </h2>


              <div className="space-y-4">

                <div className="
                  flex
                  justify-between
                  text-gray-600
                ">
                  <span>Subtotal</span>
                  <span>₹{order.subtotal}</span>
                </div>

                <div className="
                  flex
                  justify-between
                  text-gray-600
                ">
                  <span>Delivery</span>
                  <span>
                    {order.deliveryCharge === 0
                      ? "FREE"
                      : `₹${order.deliveryCharge}`}
                  </span>
                </div>

                <div className="
                  flex
                  justify-between
                  text-gray-600
                ">
                  <span>GST</span>
                  <span>₹{order.gst}</span>
                </div>

                {order.discount > 0 && (
                  <div className="
                    flex
                    justify-between
                    text-green-600
                  ">
                    <span>Discount</span>
                    <span>
                      -₹{order.discount}
                    </span>
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
                  <span>₹{order.grandTotal}</span>
                </div>

              </div>


              <div className="
                mt-6
                bg-[#FFF7F0]
                rounded-xl
                p-4
                flex
                items-center
                gap-3
              ">

                <FaCreditCard
                  className="text-[#6F4E37]"
                />

                <div>

                  <p className="
                    text-sm
                    text-gray-500
                  ">
                    Payment Method
                  </p>

                  <p className="
                    font-semibold
                    text-[#3D2B1F]
                  ">
                    {order.paymentMethod}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default OrderDetails;