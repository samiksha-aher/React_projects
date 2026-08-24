import { Link } from "react-router-dom";
import ProductCard from "../product/ProductCard";
import { products } from "../../data/products";

function TodaysSpecials() {

  const specials = products.filter(
    (product) => product.bestSeller
  );

  return (

    <section className="py-20 bg-[#3D2B1F]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="
          flex
          flex-col
          sm:flex-row
          sm:items-end
          sm:justify-between
          mb-10
        ">

          <div>

            <p className="
              text-[#D9A066]
              font-semibold
              uppercase
              tracking-widest
              text-sm
            ">

              Fresh & Delicious

            </p>

            <h2 className="
              text-3xl
              sm:text-4xl
              font-bold
              text-white
              mt-2
            ">

              Today's Specials

            </h2>

            <p className="
              text-white/60
              mt-3
            ">

              Handpicked favorites from our café.

            </p>

          </div>


          <Link
            to="/menu"
            className="
              mt-5
              sm:mt-0
              text-[#D9A066]
              font-semibold
              hover:text-white
              transition
            "
          >

            Explore Menu →

          </Link>

        </div>


        <div className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">

          {specials
            .slice(0, 4)
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

export default TodaysSpecials;