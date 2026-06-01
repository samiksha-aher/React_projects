import Navbar from "../components/Navbar";

function Contact(){

return(

<>

<Navbar/>

<div className="
max-w-xl
mx-auto
p-8">

<h1 className="
text-3xl
font-bold
mb-5">

Contact Us

</h1>

<input
placeholder="Name"
className="
w-full
p-3
border
mb-4
rounded"
/>

<input
placeholder="Email"
className="
w-full
p-3
border
mb-4
rounded"
/>

<textarea
placeholder="Message"
className="
w-full
p-3
border
rounded"
/>

<button className="
bg-amber-700
text-white
px-5
py-3
rounded
mt-5">

Send

</button>

</div>

</>

)

}

export default Contact