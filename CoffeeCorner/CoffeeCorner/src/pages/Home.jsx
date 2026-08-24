import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCoffee,
  FaPizzaSlice,
  FaHamburger,
  FaIceCream,
  FaMugHot,
  FaStar,
  FaLeaf,
  FaUtensils,
  FaShoppingCart,
} from "react-icons/fa";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/product/ProductCard";

import { products } from "../data/products";

function Home() {
  // Best-selling products for the home page
  const bestSellerProducts = products
    .filter((product) => product.bestSeller === true)
    .slice(0, 4);

  // Category cards
  const categoryCards = [
    {
      name: "coffee",
      title: "Coffee",
      description: "Freshly brewed",
      icon: <FaCoffee />,
    },
    {
      name: "tea",
      title: "Tea",
      description: "Warm & comforting",
      icon: <FaMugHot />,
    },
    {
      name: "pizza",
      title: "Pizza",
      description: "Cheesy & delicious",
      icon: <FaPizzaSlice />,
    },
    {
      name: "burger",
      title: "Burgers",
      description: "Juicy & loaded",
      icon: <FaHamburger />,
    },
    {
      name: "snacks",
      title: "Snacks",
      description: "Perfect bites",
      icon: <FaUtensils />,
    },
    {
      name: "desserts",
      title: "Desserts",
      description: "Sweet moments",
      icon: <FaIceCream />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF7F0] text-[#3D2B1F]">

      {/* ================= NAVBAR ================= */}

      <Navbar />


      {/* ================= HERO SECTION ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF8F0] via-[#F8EBDD] to-[#E8C9A8]">

        {/* Decorative background */}

        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#C89B72]/20 blur-3xl"></div>

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#6F4E37]/10 blur-3xl"></div>


        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

          {/* ================= HERO CONTENT ================= */}

          <div className="text-center lg:text-left">

            {/* Small badge */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm font-semibold text-[#6F4E37] backdrop-blur-md">

              <FaCoffee />

              Freshly Brewed Happiness

            </div>


            {/* Heading */}

            <h1 className="text-5xl font-extrabold leading-tight text-[#3D2B1F] sm:text-6xl lg:text-7xl">

              Your Daily Cup

              <span className="block text-[#8B5E3C]">
                of Happiness
              </span>

            </h1>


            {/* Description */}

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600 sm:text-xl lg:mx-0">

              Discover freshly brewed coffee, aromatic teas,
              delicious pizzas, juicy burgers, tasty snacks
              and delightful desserts — all in one place.

            </p>


            {/* Buttons */}

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#6F4E37] px-7 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#4E3525]"
              >

                Order Now

                <FaArrowRight />

              </Link>


              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#6F4E37] bg-white/60 px-7 py-4 font-bold text-[#6F4E37] backdrop-blur-md transition-all hover:bg-[#6F4E37] hover:text-white"
              >

                Explore Menu

              </Link>

            </div>


            {/* Statistics */}

            <div className="mt-10 flex flex-wrap justify-center gap-8 lg:justify-start">

              <div>
                <p className="text-2xl font-bold text-[#6F4E37]">
                  18+
                </p>

                <p className="text-sm text-gray-500">
                  Menu Items
                </p>
              </div>


              <div>
                <p className="text-2xl font-bold text-[#6F4E37]">
                  4.8
                </p>

                <p className="text-sm text-gray-500">
                  Customer Rating
                </p>
              </div>


              <div>
                <p className="text-2xl font-bold text-[#6F4E37]">
                  10K+
                </p>

                <p className="text-sm text-gray-500">
                  Happy Customers
                </p>
              </div>

            </div>

          </div>


          {/* ================= HERO VISUAL ================= */}

          <div className="relative flex justify-center lg:justify-end">

            <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full bg-[#6F4E37] shadow-2xl sm:h-[400px] sm:w-[400px]">

              <div className="absolute inset-6 rounded-full bg-[#8B5E3C] opacity-80"></div>


              <div className="relative z-10 text-center text-white">

                <FaCoffee className="mx-auto mb-5 text-8xl sm:text-9xl" />

                <p className="text-3xl font-bold sm:text-4xl">
                  CoffeeCorner
                </p>

                <p className="mt-2 text-white/70">
                  Brewed with love
                </p>

              </div>

            </div>


            {/* Rating card */}

            <div className="absolute bottom-2 left-0 rounded-2xl border border-white bg-white/80 px-5 py-4 shadow-xl backdrop-blur-xl sm:left-8">

              <div className="flex items-center gap-1 text-[#E0A24B]">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <p className="mt-1 text-sm font-semibold text-[#3D2B1F]">
                Loved by coffee lovers
              </p>

            </div>


            {/* Small offer card */}

            <div className="absolute right-0 top-8 rounded-2xl border border-white bg-white/80 px-5 py-4 shadow-xl backdrop-blur-xl">

              <p className="text-xs font-semibold uppercase tracking-wider text-[#A66A43]">
                Today's Offer
              </p>

              <p className="mt-1 text-xl font-bold text-[#6F4E37]">
                10% OFF
              </p>

              <p className="text-xs text-gray-500">
                Orders above ₹1000
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-12 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A66A43]">
            Explore
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#3D2B1F] sm:text-4xl">
            What are you craving?
          </h2>

          <p className="mt-3 text-gray-500">
            Choose from our delicious collection.
          </p>

        </div>


        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

          {categoryCards.map((category) => (

            <Link
              key={category.name}
              to={`/menu?category=${category.name}`}
              className="group rounded-3xl border border-white bg-white/60 p-6 text-center shadow-sm backdrop-blur-md transition-all hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F3E1CF] text-2xl text-[#6F4E37] transition group-hover:bg-[#6F4E37] group-hover:text-white">

                {category.icon}

              </div>


              <h3 className="mt-4 font-bold text-[#3D2B1F]">
                {category.title}
              </h3>


              <p className="mt-1 text-xs text-gray-500">
                {category.description}
              </p>

            </Link>

          ))}

        </div>

      </section>


      {/* ================= SPECIAL OFFER ================= */}

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#3D2B1F] to-[#6F4E37] p-8 text-white sm:p-12">

          {/* Background decoration */}

          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/5"></div>

          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/5"></div>


          <div className="relative z-10 max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E0A24B]">
              Today's Special
            </p>


            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Get 10% OFF on orders above ₹1000
            </h2>


            <p className="mt-4 text-white/70">
              Treat yourself to your favorite coffee,
              snacks, pizzas and desserts today.
            </p>


            <Link
              to="/menu"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-[#6F4E37] transition hover:bg-[#FFF7F0]"
            >

              Shop Now

              <FaArrowRight />

            </Link>

          </div>

        </div>

      </section>


      {/* ================= BEST SELLERS ================= */}

      <section className="bg-[#F8EBDD]/60 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A66A43]">
                Customer Favorites
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#3D2B1F] sm:text-4xl">
                Best Sellers
              </h2>

              <p className="mt-2 text-gray-500">
                Our most loved items.
              </p>

            </div>


            <Link
              to="/menu"
              className="inline-flex items-center gap-2 font-bold text-[#6F4E37] transition-all hover:gap-3"
            >

              View All

              <FaArrowRight />

            </Link>

          </div>


          {bestSellerProducts.length > 0 ? (

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {bestSellerProducts.map((product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              ))}

            </div>

          ) : (

            <div className="rounded-3xl bg-white/60 py-16 text-center text-gray-500">

              No best-selling products available.

            </div>

          )}

        </div>

      </section>


      {/* ================= WHY COFFEECORNER ================= */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-12 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A66A43]">
            Why CoffeeCorner?
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#3D2B1F] sm:text-4xl">
            Made for your everyday moments
          </h2>

        </div>


        <div className="grid gap-6 md:grid-cols-3">

          {/* Card 1 */}

          <div className="rounded-3xl border border-white bg-white/60 p-8 text-center shadow-sm backdrop-blur-md">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F3E1CF] text-2xl text-[#6F4E37]">

              <FaCoffee />

            </div>


            <h3 className="mt-5 text-xl font-bold">
              Freshly Prepared
            </h3>


            <p className="mt-3 leading-relaxed text-gray-500">
              Every coffee, tea and dish is prepared
              fresh using carefully selected ingredients.
            </p>

          </div>


          {/* Card 2 */}

          <div className="rounded-3xl border border-white bg-white/60 p-8 text-center shadow-sm backdrop-blur-md">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F3E1CF] text-2xl text-[#6F4E37]">
              🚚
            </div>


            <h3 className="mt-5 text-xl font-bold">
              Fast Delivery
            </h3>


            <p className="mt-3 leading-relaxed text-gray-500">
              Get your favorite food and beverages
              delivered fresh to your doorstep.
            </p>

          </div>


          {/* Card 3 */}

          <div className="rounded-3xl border border-white bg-white/60 p-8 text-center shadow-sm backdrop-blur-md">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F3E1CF] text-2xl text-[#6F4E37]">
              ⭐
            </div>


            <h3 className="mt-5 text-xl font-bold">
              Quality First
            </h3>


            <p className="mt-3 leading-relaxed text-gray-500">
              Great taste, quality ingredients and
              an experience you can trust.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#F3E1CF] px-6 py-14 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl text-[#6F4E37] shadow-sm">

            <FaShoppingCart />

          </div>


          <h2 className="mt-6 text-3xl font-bold text-[#3D2B1F] sm:text-4xl">
            Ready for your next coffee break?
          </h2>


          <p className="mt-3 text-gray-600">
            Discover something delicious from CoffeeCorner.
          </p>


          <Link
            to="/menu"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#6F4E37] px-8 py-4 font-bold text-white transition hover:bg-[#4E3525]"
          >

            Order Now

            <FaArrowRight />

          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default Home;