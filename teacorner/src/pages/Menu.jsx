import teas from "../data/teaData";
import TeaCard from "../components/TeaCard";

function Menu(){

return(

<div className="
max-w-7xl
mx-auto
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
p-6">

{
teas.map((tea)=>(

<TeaCard
key={tea.id}
tea={tea}
/>

))
}

</div>

)

}

export default Menu