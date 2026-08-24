import { Link } from "react-router-dom";
import {
  FaCoffee,
  FaLeaf,
  FaPizzaSlice,
  FaHamburger,
  FaIceCream,
  FaCookieBite,
  FaGlassWhiskey,
  FaBreadSlice,
} from "react-icons/fa";

const categories = [
  {
    name: "Coffee",
    icon: <FaCoffee />,
    value: "coffee",
  },
  {
    name: "Tea",
    icon: <FaLeaf />,
    value: "tea",
  },
  {
    name: "Pizza",
    icon: <FaPizzaSlice />,
    value: "pizza",
  },
  {
    name: "Burger",
    icon: <FaHamburger />,
    value: "burger",
  },
  {
    name: "Snacks",
    icon: <FaCookieBite />,
    value: "snacks",
  },
  {
    name: "Desserts",
    icon: <FaIceCream />,
    value: "desserts",
  },
  {
    name: "Beverages",
    icon: <FaGlassWhiskey />,
    value: "beverages",
  },
  {
    name: "Sandwich",
    icon: <FaBreadSlice />,
    value: "sandwich",
  },
];

function Categories() {
  return (
    <section className="py-16 bg-[#FFF7F0]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">

          <p className="text-[#A66A43] font-semibold uppercase tracking-widest text-sm">
            Explore
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2B1F] mt-2">
            Shop By Category
          </h2>

          <p className="text-gray-600 mt-3">
            Something delicious for every mood
          </p>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">

          {categories.map((category) => (

            <Link
              key={category.value}
              to={`/menu?category=${category.value}`}
              className="group bg-white/70 backdrop-blur-md border border-[#D9A066]/20 rounded-2xl p-5 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <div className="w-14 h-14 mx-auto rounded-full bg-[#EFD3B1] text-[#6F4E37] flex items-center justify-center text-2xl group-hover:bg-[#6F4E37] group-hover:text-white transition">

                {category.icon}

              </div>

              <h3 className="mt-3 font-semibold text-[#4E3525]">
                {category.name}
              </h3>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;