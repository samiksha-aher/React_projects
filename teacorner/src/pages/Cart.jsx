import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

function Cart(){

const{
cart,
removeFromCart
}=useCart()

return(

<>

<Navbar/>

<div className="p-8">

<h1 className="
text-3xl
font-bold">

Cart

</h1>

{
cart.map(item=>(

<div
key={item.id}
className="
flex
justify-between
bg-white
p-4
rounded
mt-4">

<div>

<h2>{item.name}</h2>

<p>

₹{item.price}

</p>

</div>

<button
onClick={()=>removeFromCart(item.id)}
className="
bg-red-500
text-white
px-4
rounded">

Remove

</button>

</div>

))
}

</div>

</>

)

}

export default Cart