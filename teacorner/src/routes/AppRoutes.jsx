import {Routes,Route} from "react-router-dom"

import Home from "../pages/Home"
import Menu from "../pages/Menu"
import Cart from "../pages/Cart"
import Wishlist from "../pages/Wishlist"
import Orders from "../pages/Orders"
import Contact from "../pages/Contact"

function AppRoutes(){

return(

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/menu" element={<Menu/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/wishlist" element={<Wishlist/>}/>
<Route path="/orders" element={<Orders/>}/>
<Route path="/contact" element={<Contact/>}/>

</Routes>

)

}

export default AppRoutes