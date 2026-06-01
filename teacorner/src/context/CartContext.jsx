import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

const [cart,setCart]=useState(
JSON.parse(localStorage.getItem("cart")) || []
);

const [wishlist,setWishlist]=useState(
JSON.parse(localStorage.getItem("wishlist")) || []
);

const [orders,setOrders]=useState(
JSON.parse(localStorage.getItem("orders")) || []
);


useEffect(()=>{

localStorage.setItem(
"cart",
JSON.stringify(cart)
)

},[cart])


useEffect(()=>{

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
)

},[wishlist])


useEffect(()=>{

localStorage.setItem(
"orders",
JSON.stringify(orders)
)

},[orders])



const addToCart=(tea)=>{

const exist=cart.find(
item=>item.id===tea.id
)

if(exist){

toast.info("Already in cart")
return
}

setCart([...cart,tea])

toast.success(`${tea.name} added to cart`)
}



const removeFromCart=(id)=>{

setCart(
cart.filter(
item=>item.id!==id
)
)

toast.error(
"Removed from cart"
)
}



const addWishlist=(tea)=>{

const exist=wishlist.find(
item=>item.id===tea.id
)

if(exist){

setWishlist(

wishlist.filter(
item=>item.id!==tea.id
)

)

toast.info(
"Removed from wishlist"
)

return
}

setWishlist(
[...wishlist,tea]
)

toast.success(
"Added to wishlist"
)
}



const placeOrder=(tea)=>{

const newOrder={

...tea,

orderId:Date.now(),

date:new Date().toLocaleString()

}

setOrders(
[newOrder,...orders]
)

toast.success(
`${tea.name} ordered successfully`
)

}



return(

<CartContext.Provider
value={{

cart,
wishlist,
orders,

addToCart,
removeFromCart,
addWishlist,
placeOrder

}}
>

{children}

</CartContext.Provider>

)

}

export const useCart=()=>useContext(CartContext)