import { useMemo, useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaTimes,
  FaCoffee,
  FaStar,
  FaSortAmountDown,
} from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/product/ProductCard";
import { products, categories } from "../data/products";

function Menu() {
  const [searchParams] = useSearchParams();

  const urlCategory = searchParams.get("category") || "all";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(urlCategory);
  const [maxPrice, setMaxPrice] = useState(500);
  const [rating, setRating] = useState(0);
  const [sort, setSort] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  // =========================
  // FILTER PRODUCTS
  // =========================

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (search.trim()) {
      const searchText = search.toLowerCase().trim();

      result = result.filter((product) => {
        return (
          product.name.toLowerCase().includes(searchText) ||
          product.category.toLowerCase().includes(searchText) ||
          product.description.toLowerCase().includes(searchText)
        );
      });
    }

    // Category
    if (category !== "all") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    // Maximum price
    result = result.filter(
      (product) => product.price <= maxPrice
    );

    // Rating
    if (rating > 0) {
      result = result.filter(
        (product) => product.rating >= rating
      );
    }

    // Sorting
    if (sort === "low-high") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high-low") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "name") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [search, category, maxPrice, rating, sort]);

  // =========================
  // CLEAR FILTERS
  // =========================

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setMaxPrice(500);
    setRating(0);
    setSort("default");
  };

  // =========================
  // CATEGORY SELECT
  // =========================

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setShowFilters(false);
  };

  return (
    <div className="min-h-screen bg-[#FFF7F0] text-[#3D2B1F]">

      <Navbar />

      {/* =========================
          HEADER
      ========================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#3D2B1F] via-[#5A3D2B] to-[#6F4E37] py-16 text-white">

        {/* Decorative circles */}

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D9A066]/10 blur-2xl" />

        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#E8C9A8]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl backdrop-blur-md">
            <FaCoffee />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D9A066]">
            Explore Our Menu
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Delicious Choices
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Discover freshly brewed coffee, aromatic teas,
            delicious pizzas, burgers, snacks, desserts
            and refreshing beverages.
          </p>

        </div>
      </section>


      {/* =========================
          MAIN CONTENT
      ========================= */}

      <main className="mx-auto max-w-7xl px-6 py-12">

        {/* =========================
            SEARCH + SORT
        ========================= */}

        <div className="mb-8 flex flex-col gap-4 lg:flex-row">

          {/* Search */}

          <div className="relative flex-1">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search coffee, tea, pizza, burger..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-[#EFD3B1] bg-white py-3.5 pl-11 pr-4 outline-none transition focus:ring-2 focus:ring-[#A66A43]"
            />

          </div>


          {/* Sort */}

          <div className="relative">

            <FaSortAmountDown className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#6F4E37]" />

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full appearance-none rounded-xl border border-[#EFD3B1] bg-white py-3.5 pl-11 pr-10 outline-none transition focus:ring-2 focus:ring-[#A66A43] lg:w-64"
            >
              <option value="default">
                Sort By
              </option>

              <option value="low-high">
                Price: Low to High
              </option>

              <option value="high-low">
                Price: High to Low
              </option>

              <option value="rating">
                Highest Rated
              </option>

              <option value="name">
                Name A-Z
              </option>
            </select>

          </div>


          {/* Mobile filter button */}

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#6F4E37] px-5 py-3 font-semibold text-white transition hover:bg-[#4E3525] lg:hidden"
          >
            <FaFilter />
            Filters
          </button>

        </div>


        {/* =========================
            ACTIVE FILTER
        ========================= */}

        {(category !== "all" ||
          rating > 0 ||
          maxPrice < 500 ||
          search) && (

          <div className="mb-6 flex flex-wrap items-center gap-2">

            <span className="text-sm font-semibold text-gray-600">
              Active filters:
            </span>

            {search && (
              <span className="rounded-full bg-[#F3E1CF] px-4 py-2 text-sm text-[#6F4E37]">
                Search: {search}
              </span>
            )}

            {category !== "all" && (
              <span className="rounded-full bg-[#F3E1CF] px-4 py-2 text-sm capitalize text-[#6F4E37]">
                {category}
              </span>
            )}

            {rating > 0 && (
              <span className="rounded-full bg-[#F3E1CF] px-4 py-2 text-sm text-[#6F4E37]">
                {rating}★ & above
              </span>
            )}

            {maxPrice < 500 && (
              <span className="rounded-full bg-[#F3E1CF] px-4 py-2 text-sm text-[#6F4E37]">
                Up to ₹{maxPrice}
              </span>
            )}

            <button
              onClick={clearFilters}
              className="text-sm font-semibold text-[#A66A43] hover:underline"
            >
              Clear
            </button>

          </div>
        )}


        {/* =========================
            GRID
        ========================= */}

        <div className="grid gap-8 lg:grid-cols-4">

          {/* =========================
              FILTER SIDEBAR
          ========================= */}

          <aside
            className={`
              ${
                showFilters
                  ? "block"
                  : "hidden"
              }
              lg:block
              h-fit
              rounded-3xl
              border
              border-[#EFD3B1]
              bg-white/70
              p-6
              shadow-sm
              backdrop-blur-md
              lg:sticky
              lg:top-28
            `}
          >

            {/* Filter heading */}

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-xl font-bold text-[#3D2B1F]">
                Filters
              </h2>

              <div className="flex items-center gap-3">

                <button
                  onClick={clearFilters}
                  className="text-sm font-semibold text-[#A66A43] hover:underline"
                >
                  Clear All
                </button>

                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-500 lg:hidden"
                >
                  <FaTimes />
                </button>

              </div>

            </div>


            {/* =========================
                CATEGORY
            ========================= */}

            <div className="mb-8">

              <h3 className="mb-4 font-semibold text-[#4E3525]">
                Category
              </h3>

              <div className="space-y-2">

                {categories.map((item) => (

                  <button
                    key={item}
                    onClick={() =>
                      handleCategoryChange(item)
                    }
                    className={`
                      w-full
                      rounded-xl
                      px-4
                      py-2.5
                      text-left
                      capitalize
                      transition-all
                      ${
                        category === item
                          ? "bg-[#6F4E37] font-semibold text-white shadow-md"
                          : "text-gray-600 hover:bg-[#F3E1CF] hover:text-[#6F4E37]"
                      }
                    `}
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>


            {/* =========================
                PRICE
            ========================= */}

            <div className="mb-8">

              <div className="mb-3 flex justify-between">

                <h3 className="font-semibold text-[#4E3525]">
                  Maximum Price
                </h3>

                <span className="font-semibold text-[#6F4E37]">
                  ₹{maxPrice}
                </span>

              </div>

              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(Number(e.target.value))
                }
                className="w-full accent-[#6F4E37]"
              />

              <div className="mt-2 flex justify-between text-xs text-gray-400">
                <span>₹50</span>
                <span>₹500+</span>
              </div>

            </div>


            {/* =========================
                RATING
            ========================= */}

            <div>

              <h3 className="mb-4 font-semibold text-[#4E3525]">
                Minimum Rating
              </h3>

              {[4, 3, 2].map((value) => (

                <button
                  key={value}
                  onClick={() =>
                    setRating(
                      rating === value ? 0 : value
                    )
                  }
                  className={`
                    mb-2
                    block
                    w-full
                    rounded-xl
                    px-4
                    py-2.5
                    text-left
                    transition
                    ${
                      rating === value
                        ? "bg-[#EFD3B1] text-[#6F4E37]"
                        : "hover:bg-[#F8EBDD]"
                    }
                  `}
                >

                  <span className="text-[#E0A24B]">
                    {"★".repeat(value)}
                    {"☆".repeat(5 - value)}
                  </span>

                  <span className="ml-2 text-sm">
                    & above
                  </span>

                </button>

              ))}

            </div>

          </aside>


          {/* =========================
              PRODUCTS
          ========================= */}

          <section className="lg:col-span-3">

            {/* Product count */}

            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">

              <p className="text-gray-600">

                Showing{" "}

                <span className="font-bold text-[#3D2B1F]">
                  {filteredProducts.length}
                </span>{" "}

                products

              </p>


              {category !== "all" && (

                <span className="rounded-full bg-[#EFD3B1] px-4 py-2 text-sm font-semibold capitalize text-[#6F4E37]">
                  {category}
                </span>

              )}

            </div>


            {/* Product cards */}

            {filteredProducts.length > 0 ? (

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

                {filteredProducts.map((product) => (

                  <ProductCard
                    key={product.id}
                    product={product}
                  />

                ))}

              </div>

            ) : (

              /* =========================
                 NO PRODUCTS
              ========================= */

              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-[#EFD3B1] bg-white/60 px-6 text-center">

                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#F3E1CF] text-4xl text-[#6F4E37]">
                  <FaCoffee />
                </div>

                <h2 className="text-2xl font-bold text-[#3D2B1F]">
                  No Products Found
                </h2>

                <p className="mt-2 text-gray-500">
                  Try changing your search or filters.
                </p>

                <button
                  onClick={clearFilters}
                  className="mt-5 rounded-full bg-[#6F4E37] px-6 py-3 font-semibold text-white transition hover:bg-[#4E3525]"
                >
                  Clear Filters
                </button>

              </div>

            )}

          </section>

        </div>

      </main>

    </div>
  );
}

export default Menu;