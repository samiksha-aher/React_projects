import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

function Wishlist(){

const {wishlist}=useCart()

return(

<>

<Navbar/>

<div className="p-8">

<h1 className="
text-3xl
font-bold">

Wishlist

</h1>

{
wishlist.map(item=>(

<div
key={item.id}
className="
bg-white
rounded
p-4
mt-4">

{item.name}

</div>

))
}

</div>

</>

)

}

export default Wishlist