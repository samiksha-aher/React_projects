import { Link } from "react-router-dom";
import ProductCard from "../product/ProductCard";
import { products } from "../../data/products";

function PopularProducts() {

  const popularProducts = products.filter(
    (product) => product.popular
  );

  return (

    <section className="py-20 bg-gradient-to-b from-[#FFF7F0] to-[#F5E5D4]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">

          <div>

            <p className="
              text-[#A66A43]
              font-semibold
              uppercase
              tracking-widest
              text-sm
            ">

              Customer Favorites

            </p>

            <h2 className="
              text-3xl
              sm:text-4xl
              font-bold
              text-[#3D2B1F]
              mt-2
            ">

              Popular Picks

            </h2>

            <p className="text-gray-600 mt-3">

              Our most loved coffee, tea and café treats.

            </p>

          </div>


          <Link
            to="/menu"
            className="
              mt-5
              sm:mt-0
              text-[#6F4E37]
              font-semibold
              hover:text-[#A66A43]
              transition
            "
          >

            View All →

          </Link>

        </div>


        {/* Products */}

        <div className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">

          {popularProducts
            .slice(0, 8)
            .map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

        </div>

      </div>

    </section>
  );
}

export default PopularProducts;