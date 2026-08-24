import { useEffect, useState } from "react";
import {
  FaClipboardList,
  FaEye,
  FaTrash,
  FaShoppingBag,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Orders() {
  const [orders, setOrders] = useState([]);

  // Load orders
  useEffect(() => {
    const savedOrders =
      JSON.parse(
        localStorage.getItem("coffeeOrders")
      ) || [];

    setOrders(savedOrders);
  }, []);

  // Cancel order
  const cancelOrder = (orderId) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this order?"
    );

    if (!confirmed) return;

    const updatedOrders = orders.map((order) =>
      order.id === orderId
        ? {
            ...order,
            status: "Cancelled",
          }
        : order
    );

    setOrders(updatedOrders);

    localStorage.setItem(
      "coffeeOrders",
      JSON.stringify(updatedOrders)
    );

    toast.info("Order cancelled successfully");
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
          <FaClipboardList
            className="
              mx-auto
              text-4xl
              text-[#D9A066]
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
            My Orders
          </h1>

          <p className="text-white/70 mt-3">
            Track and manage your CoffeeCorner orders
          </p>
        </div>
      </section>

      {/* Orders */}
      <main
        className="
          max-w-6xl
          mx-auto
          px-6
          py-12
        "
      >

        {orders.length === 0 ? (

          /* Empty Orders */
          <div
            className="
              min-h-[450px]
              flex
              flex-col
              items-center
              justify-center
              text-center
              bg-white/70
              backdrop-blur-md
              border
              border-[#EFD3B1]
              rounded-3xl
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
              <FaShoppingBag
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
              No Orders Yet
            </h2>

            <p className="
              text-gray-500
              mt-3
            ">
              Your delicious coffee journey starts here.
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

        ) : (

          <div className="space-y-6">

            {orders.map((order) => (

              <div
                key={order.id}
                className="
                  bg-white/70
                  backdrop-blur-md
                  border
                  border-[#EFD3B1]
                  rounded-3xl
                  p-6
                  sm:p-8
                  shadow-md
                  hover:shadow-xl
                  transition
                "
              >

                {/* Top */}
                <div
                  className="
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    md:justify-between
                    gap-5
                  "
                >

                  <div>

                    <p className="
                      text-xs
                      uppercase
                      tracking-wider
                      text-gray-500
                    ">
                      Order ID
                    </p>

                    <h2
                      className="
                        text-xl
                        font-bold
                        text-[#3D2B1F]
                        mt-1
                      "
                    >
                      {order.id}
                    </h2>

                    <p className="
                      text-sm
                      text-gray-500
                      mt-1
                    ">
                      {order.date}
                    </p>

                  </div>


                  {/* Status */}
                  <div>

                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-semibold

                        ${
                          order.status === "Cancelled"
                            ? "bg-red-100 text-red-600"
                            : "bg-green-100 text-green-600"
                        }
                      `}
                    >

                      <FaCheckCircle />

                      {order.status}

                    </span>

                  </div>

                </div>


                {/* Divider */}
                <div
                  className="
                    border-t
                    border-[#EFD3B1]
                    my-6
                  "
                />


                {/* Order information */}
                <div
                  className="
                    grid
                    sm:grid-cols-2
                    lg:grid-cols-4
                    gap-5
                  "
                >

                  <div>
                    <p className="
                      text-sm
                      text-gray-500
                    ">
                      Items
                    </p>

                    <p className="
                      font-semibold
                      text-[#3D2B1F]
                      mt-1
                    ">
                      {order.items.length} item
                      {order.items.length !== 1
                        ? "s"
                        : ""}
                    </p>
                  </div>


                  <div>
                    <p className="
                      text-sm
                      text-gray-500
                    ">
                      Payment
                    </p>

                    <p className="
                      font-semibold
                      text-[#3D2B1F]
                      mt-1
                    ">
                      {order.paymentMethod}
                    </p>
                  </div>


                  <div>
                    <p className="
                      text-sm
                      text-gray-500
                    ">
                      Delivery
                    </p>

                    <p className="
                      font-semibold
                      text-[#3D2B1F]
                      mt-1
                    ">
                      {order.address.city}
                    </p>
                  </div>


                  <div>
                    <p className="
                      text-sm
                      text-gray-500
                    ">
                      Total
                    </p>

                    <p className="
                      font-bold
                      text-xl
                      text-[#6F4E37]
                      mt-1
                    ">
                      ₹{order.grandTotal}
                    </p>
                  </div>

                </div>


                {/* Product preview */}
                <div className="mt-6">

                  <div className="
                    flex
                    flex-wrap
                    gap-3
                  ">

                    {order.items
                      .slice(0, 4)
                      .map((item) => (

                        <div
                          key={item.id}
                          className="
                            flex
                            items-center
                            gap-2
                            bg-[#FFF7F0]
                            rounded-xl
                            px-3
                            py-2
                          "
                        >

                          <img
                            src={item.image}
                            alt={item.name}
                            className="
                              w-10
                              h-10
                              rounded-lg
                              object-cover
                            "
                          />

                          <span className="
                            text-sm
                            font-medium
                            text-[#3D2B1F]
                          ">
                            {item.name}
                          </span>

                        </div>

                      ))}

                    {order.items.length > 4 && (
                      <div className="
                        flex
                        items-center
                        px-3
                        text-sm
                        text-gray-500
                      ">
                        +{order.items.length - 4} more
                      </div>
                    )}

                  </div>

                </div>


                {/* Actions */}
                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    gap-3
                    mt-7
                  "
                >

                  <Link
                    to={`/order/${order.id}`}
                    className="
                      flex-1
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
                    <FaEye />
                    View Order
                  </Link>


                  {order.status !== "Cancelled" && (
                    <button
                      onClick={() =>
                        cancelOrder(order.id)
                      }
                      className="
                        flex-1
                        flex
                        items-center
                        justify-center
                        gap-2
                        border
                        border-red-300
                        text-red-500
                        hover:bg-red-500
                        hover:text-white
                        py-3
                        rounded-xl
                        font-semibold
                        transition
                      "
                    >
                      <FaTrash />
                      Cancel Order
                    </button>
                  )}

                </div>

              </div>

            ))}

          </div>

        )}

      </main>

      <Footer />

    </div>
  );
}

export default Orders;