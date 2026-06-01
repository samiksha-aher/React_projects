import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navbar(){

return(

<nav className="
bg-amber-800
p-4
sticky
top-0
z-50">

<div className="
max-w-7xl
mx-auto
flex
justify-between
items-center">

<h1 className="
text-white
font-bold
text-2xl">

Tea Haven ☕

</h1>

<div className="
flex
gap-5
text-white">

<Link to="/">Home</Link>

<Link to="/menu">Menu</Link>

<Link to="/wishlist">Wishlist</Link>

<Link to="/orders">Orders</Link>

<Link to="/contact">Contact</Link>

<Link to="/cart">

<FaShoppingCart className="text-xl"/>

</Link>

</div>

</div>

</nav>

)

}

export default Navbar