import { Link } from "react-router-dom";
import {
  FaCoffee,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#2B1D15] text-white">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
        ">

          {/* Brand */}
          <div>

            <Link
              to="/"
              className="flex items-center gap-2"
            >

              <FaCoffee className="text-[#D9A066] text-2xl" />

              <span className="text-2xl font-bold">
                Coffee<span className="text-[#D9A066]">
                  Corner
                </span>
              </span>

            </Link>

            <p className="text-white/60 mt-5 leading-relaxed">
              Your cozy corner for freshly brewed coffee,
              delicious food and unforgettable moments.
            </p>

            <div className="flex gap-3 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D9A066] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D9A066] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D9A066] transition"
              >
                <FaTwitter />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-white/60">

              <Link
                to="/"
                className="hover:text-[#D9A066]"
              >
                Home
              </Link>

              <Link
                to="/menu"
                className="hover:text-[#D9A066]"
              >
                Menu
              </Link>

              <Link
                to="/offers"
                className="hover:text-[#D9A066]"
              >
                Offers
              </Link>

              <Link
                to="/about"
                className="hover:text-[#D9A066]"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="hover:text-[#D9A066]"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Categories */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Categories
            </h3>

            <div className="flex flex-col gap-3 text-white/60">

              <Link to="/menu?category=coffee">
                Coffee
              </Link>

              <Link to="/menu?category=tea">
                Tea
              </Link>

              <Link to="/menu?category=pizza">
                Pizza
              </Link>

              <Link to="/menu?category=burger">
                Burgers
              </Link>

              <Link to="/menu?category=desserts">
                Desserts
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-white/60">

              <div className="flex gap-3">

                <FaMapMarkerAlt className="text-[#D9A066] mt-1" />

                <span>
                  Main Street, City Center
                </span>

              </div>

              <div className="flex gap-3">

                <FaPhone className="text-[#D9A066] mt-1" />

                <span>
                  +91 98765 43210
                </span>

              </div>

              <div className="flex gap-3">

                <FaEnvelope className="text-[#D9A066] mt-1" />

                <span>
                  hello@coffeecorner.com
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10">

        <div className="
          max-w-7xl
          mx-auto
          px-6
          py-5
          text-center
          text-sm
          text-white/40
        ">

          © 2026 CoffeeCorner. All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;