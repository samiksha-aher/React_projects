import { Link, useParams } from "react-router-dom";
import {
  FaCheckCircle,
  FaShoppingBag,
  FaClipboardList,
} from "react-icons/fa";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function OrderSuccess() {
  const { orderId } = useParams();

  return (
    <div className="min-h-screen bg-[#FFF7F0]">

      <Navbar />

      <main className="
        min-h-[70vh]
        flex
        items-center
        justify-center
        px-6
        py-16
      ">

        <div className="
          max-w-2xl
          w-full
          bg-white/70
          backdrop-blur-md
          border
          border-[#EFD3B1]
          rounded-3xl
          p-8
          sm:p-12
          text-center
          shadow-lg
        ">

          <div className="
            w-24
            h-24
            rounded-full
            bg-green-100
            flex
            items-center
            justify-center
            mx-auto
            mb-7
          ">

            <FaCheckCircle
              className="
                text-5xl
                text-green-500
              "
            />

          </div>

          <h1 className="
            text-3xl
            sm:text-4xl
            font-bold
            text-[#3D2B1F]
          ">
            Order Confirmed!
          </h1>

          <p className="
            text-gray-500
            mt-3
            text-lg
          ">
            Thank you for ordering from
            CoffeeCorner.
          </p>

          <div className="
            bg-[#FFF7F0]
            rounded-2xl
            p-5
            mt-7
          ">

            <p className="text-sm text-gray-500">
              Order ID
            </p>

            <p className="
              text-xl
              font-bold
              text-[#6F4E37]
              mt-1
            ">
              {orderId}
            </p>

          </div>

          <p className="
            text-gray-500
            mt-6
          ">
            Your delicious order is being prepared.
          </p>


          <div className="
            flex
            flex-col
            sm:flex-row
            gap-3
            mt-8
          ">

            <Link
              to="/orders"
              className="
                flex-1
                flex
                items-center
                justify-center
                gap-2
                bg-[#6F4E37]
                hover:bg-[#4E3525]
                text-white
                py-3.5
                rounded-xl
                font-semibold
              "
            >
              <FaClipboardList />
              View My Orders
            </Link>

            <Link
              to="/menu"
              className="
                flex-1
                flex
                items-center
                justify-center
                gap-2
                border
                border-[#6F4E37]
                text-[#6F4E37]
                hover:bg-[#6F4E37]
                hover:text-white
                py-3.5
                rounded-xl
                font-semibold
              "
            >
              <FaShoppingBag />
              Continue Shopping
            </Link>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default OrderSuccess;