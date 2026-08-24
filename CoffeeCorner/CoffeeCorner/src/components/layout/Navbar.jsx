import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaCoffee,
  FaHeart,
  FaShoppingCart,
  FaClipboardList,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { useCart } from "../../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `
      relative
      font-medium
      transition
      duration-200
      ${
        isActive
          ? "text-[#6F4E37]"
          : "text-[#4A3728] hover:text-[#6F4E37]"
      }
    `;

  return (
    <header className="
      sticky
      top-0
      z-50
      bg-[#FFF9F3]/90
      backdrop-blur-xl
      border-b
      border-[#EFD3B1]
      shadow-sm
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-5
        sm:px-6
        lg:px-8
        h-20
        flex
        items-center
        justify-between
      ">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="
            flex
            items-center
            gap-3
            group
          "
        >

          <div className="
            w-11
            h-11
            rounded-2xl
            bg-[#6F4E37]
            flex
            items-center
            justify-center
            text-white
            shadow-md
            group-hover:rotate-6
            transition
          ">
            <FaCoffee className="text-xl" />
          </div>

          <div>
            <h1 className="
              text-xl
              sm:text-2xl
              font-bold
              text-[#3D2B1F]
              leading-none
            ">
              CoffeeCorner
            </h1>

            <p className="
              text-[10px]
              sm:text-xs
              text-[#A66A43]
              tracking-[0.18em]
              uppercase
              mt-1
            ">
              Brew • Bite • Enjoy
            </p>
          </div>

        </Link>


        {/* Desktop Navigation */}
        <nav className="
          hidden
          lg:flex
          items-center
          gap-8
        ">

          <NavLink
            to="/"
            className={navLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            className={navLinkClass}
          >
            Menu
          </NavLink>

          <NavLink
            to="/wishlist"
            className={navLinkClass}
          >
            Wishlist
          </NavLink>

          <NavLink
            to="/orders"
            className={navLinkClass}
          >
            Orders
          </NavLink>

        </nav>


        {/* Right Actions */}
        <div className="
          flex
          items-center
          gap-2
          sm:gap-3
        ">

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="
              relative
              w-10
              h-10
              rounded-full
              bg-white
              border
              border-[#EFD3B1]
              flex
              items-center
              justify-center
              text-[#6F4E37]
              hover:bg-[#F8EBDD]
              hover:scale-105
              transition
            "
            aria-label="Wishlist"
          >
            <FaHeart />

          </Link>


          {/* Orders - desktop/tablet */}
          <Link
            to="/orders"
            className="
              hidden
              sm:flex
              w-10
              h-10
              rounded-full
              bg-white
              border
              border-[#EFD3B1]
              items-center
              justify-center
              text-[#6F4E37]
              hover:bg-[#F8EBDD]
              hover:scale-105
              transition
            "
            aria-label="Orders"
          >
            <FaClipboardList />
          </Link>


          {/* Cart */}
          <Link
            to="/cart"
            className="
              relative
              w-10
              h-10
              rounded-full
              bg-[#6F4E37]
              text-white
              flex
              items-center
              justify-center
              hover:bg-[#4E3525]
              hover:scale-105
              transition
            "
            aria-label="Cart"
          >

            <FaShoppingCart />

            {cartCount > 0 && (
              <span className="
                absolute
                -top-1
                -right-1
                min-w-[20px]
                h-5
                px-1
                rounded-full
                bg-[#C85C5C]
                text-white
                text-[11px]
                font-bold
                flex
                items-center
                justify-center
                border-2
                border-[#FFF9F3]
              ">
                {cartCount > 99
                  ? "99+"
                  : cartCount}
              </span>
            )}

          </Link>


          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="
              lg:hidden
              w-10
              h-10
              rounded-full
              bg-white
              border
              border-[#EFD3B1]
              flex
              items-center
              justify-center
              text-[#6F4E37]
              hover:bg-[#F8EBDD]
              transition
            "
            aria-label="Toggle menu"
          >

            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}

          </button>

        </div>

      </div>


      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="
          lg:hidden
          border-t
          border-[#EFD3B1]
          bg-[#FFF9F3]
          shadow-lg
        ">

          <nav className="
            max-w-7xl
            mx-auto
            px-6
            py-5
            flex
            flex-col
            gap-2
          ">

            <NavLink
              to="/"
              onClick={closeMenu}
              className={({
                isActive,
              }) => `
                px-4
                py-3
                rounded-xl
                font-medium
                ${
                  isActive
                    ? "bg-[#F8EBDD] text-[#6F4E37]"
                    : "text-[#4A3728] hover:bg-[#F8EBDD]"
                }
              `}
            >
              Home
            </NavLink>


            <NavLink
              to="/menu"
              onClick={closeMenu}
              className={({
                isActive,
              }) => `
                px-4
                py-3
                rounded-xl
                font-medium
                ${
                  isActive
                    ? "bg-[#F8EBDD] text-[#6F4E37]"
                    : "text-[#4A3728] hover:bg-[#F8EBDD]"
                }
              `}
            >
              Menu
            </NavLink>


            <NavLink
              to="/wishlist"
              onClick={closeMenu}
              className={({
                isActive,
              }) => `
                px-4
                py-3
                rounded-xl
                font-medium
                ${
                  isActive
                    ? "bg-[#F8EBDD] text-[#6F4E37]"
                    : "text-[#4A3728] hover:bg-[#F8EBDD]"
                }
              `}
            >
              Wishlist ❤️
            </NavLink>


            <NavLink
              to="/orders"
              onClick={closeMenu}
              className={({
                isActive,
              }) => `
                px-4
                py-3
                rounded-xl
                font-medium
                ${
                  isActive
                    ? "bg-[#F8EBDD] text-[#6F4E37]"
                    : "text-[#4A3728] hover:bg-[#F8EBDD]"
                }
              `}
            >
              My Orders
            </NavLink>


            <NavLink
              to="/cart"
              onClick={closeMenu}
              className="
                mt-2
                px-4
                py-3
                rounded-xl
                bg-[#6F4E37]
                text-white
                font-semibold
                flex
                items-center
                justify-between
              "
            >

              <span className="
                flex
                items-center
                gap-2
              ">
                <FaShoppingCart />
                My Cart
              </span>

              <span>
                {cartCount} item
                {cartCount !== 1 ? "s" : ""}
              </span>

            </NavLink>

          </nav>

        </div>
      )}

    </header>
  );
}

export default Navbar;