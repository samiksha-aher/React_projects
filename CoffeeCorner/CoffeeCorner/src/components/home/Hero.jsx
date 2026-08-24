import { Link } from "react-router-dom";
import { FaArrowRight, FaCoffee } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF7F0] via-[#EFD3B1] to-[#C89B6D]">

      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#A66A43]/20 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-[#6F4E37]/15 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Content */}
          <div>

            <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full text-[#6F4E37] mb-6">

              <FaCoffee />

              <span className="text-sm font-medium">
                Freshly Brewed Every Day
              </span>

            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#3D2B1F] leading-tight">

              Your Daily Dose of

              <span className="block text-[#8B5E3C]">
                Coffee & Comfort
              </span>

            </h1>

            <p className="mt-6 text-lg text-[#6F4E37] max-w-xl leading-relaxed">

              From freshly brewed coffee and masala chai to delicious
              pizzas, burgers, snacks and desserts — everything you love,
              all in one cozy corner.

            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/menu"
                className="flex items-center gap-3 bg-[#6F4E37] hover:bg-[#4E3525] text-white px-7 py-3.5 rounded-full font-semibold transition shadow-lg"
              >
                Explore Menu
                <FaArrowRight />
              </Link>

              <Link
                to="/offers"
                className="border-2 border-[#6F4E37] text-[#6F4E37] hover:bg-[#6F4E37] hover:text-white px-7 py-3 rounded-full font-semibold transition"
              >
                View Offers
              </Link>

            </div>

          </div>

          {/* Visual */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#FFF7F0]/50 backdrop-blur-sm flex items-center justify-center shadow-2xl">

                <div className="text-[150px] sm:text-[200px] drop-shadow-xl">
                  ☕
                </div>

              </div>

              <div className="absolute -top-4 -right-4 bg-white/70 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg">

                <p className="text-[#6F4E37] font-bold">
                  ⭐ 4.9
                </p>

                <p className="text-xs text-gray-500">
                  Customer Rating
                </p>

              </div>

              <div className="absolute -bottom-4 -left-4 bg-[#6F4E37] text-white px-5 py-3 rounded-2xl shadow-lg">

                <p className="font-bold">
                  20+
                </p>

                <p className="text-xs">
                  Delicious Choices
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;