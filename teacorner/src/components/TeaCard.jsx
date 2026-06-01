import { FaHeart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function TeaCard({ tea }) {

const {
addToCart,
addWishlist,
placeOrder,
wishlist
}=useCart()

const isWishlisted=wishlist.some(
item=>item.id===tea.id
)

return(

<div
className="
bg-white/30
backdrop-blur-md
border
border-white/25
rounded-2xl
shadow-lg
p-4
hover:-translate-y-2
hover:shadow-2xl
duration-300"
>

<img
src={tea.image}
alt={tea.name}
className="
h-56
w-full
object-cover
rounded-xl
opacity-95"
/>


<h2
className="
text-xl
font-bold
mt-4
text-[#4A2F20]"
>

{tea.name}

</h2>


<p
className="
mt-2
font-semibold
text-[#7A4B2A]"
>

₹{tea.price}

</p>


<div
className="
flex
gap-2
mt-5
items-center
justify-between"
>

<button
onClick={()=>addToCart(tea)}
className="
bg-[#8B5E3C]
hover:bg-[#6F4427]
text-white
px-4
py-2
rounded-lg
duration-300"
>

Add Cart

</button>


<button
onClick={()=>placeOrder(tea)}
className="
bg-[#C98B5D]
hover:bg-[#A66A43]
text-white
px-4
py-2
rounded-lg
duration-300"
>

Order Now

</button>


<button
onClick={()=>addWishlist(tea)}
className="
bg-white/30
backdrop-blur-sm
rounded-full
p-3
hover:scale-110
duration-300"
>

<FaHeart
className={`
text-xl
duration-300
${isWishlisted
? "text-red-500"
: "text-gray-500"}
`}
/>

</button>

</div>

</div>

)

}

export default TeaCard