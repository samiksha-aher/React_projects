import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

function Orders(){

const {orders}=useCart()

const confirmOrder=(name)=>{

toast.success(
`Your ${name} order has been confirmed! ☕`,
{
position:"top-right"
}
)

}

return(

<>

<Navbar/>

<div className="
max-w-6xl
mx-auto
p-8">

<h1 className="
text-3xl
font-bold
text-amber-900
mb-8">

My Orders

</h1>

{
orders.length===0 ?

(

<div className="
bg-white
rounded-xl
shadow-md
p-10
text-center">

No orders yet ☕

</div>

)

:

orders.map(order=>(

<div
key={order.orderId}
className="
bg-white
shadow-md
rounded-xl
p-5
mb-5
flex
justify-between
items-center">

<div>

<h2 className="font-bold text-lg">

{order.name}

</h2>

<p>

₹{order.price}

</p>

<p className="
text-gray-500
text-sm">

{order.date}

</p>

</div>


<button
onClick={()=>confirmOrder(order.name)}
className="
bg-green-500
hover:bg-green-600
text-white
px-4
py-2
rounded-lg
duration-300">

Confirm Order

</button>

</div>

))

}

</div>

</>

)

}

export default Orders