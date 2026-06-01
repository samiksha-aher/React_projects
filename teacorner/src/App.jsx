import {useState,useEffect} from "react";

import Loader from "./components/Loader";
import AppRoutes from "./routes/AppRoutes";
import PageLayout from "./components/PageLayout";

function App(){

const [loading,setLoading]=useState(true)

useEffect(()=>{

setTimeout(()=>{

setLoading(false)

},3000)

},[])


return(

<>

{
loading
?

<Loader/>

:

<PageLayout>

<AppRoutes/>

</PageLayout>

}

</>

)

}

export default App