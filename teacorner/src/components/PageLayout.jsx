function PageLayout({children}){

return(

<div
className="
min-h-screen
relative
overflow-hidden
bg-gradient-to-br
from-[#FFF5EC]
via-[#D9A066]
to-[#5A3926]
">

{/* Top chai glow */}

<div
className="
absolute
top-[-100px]
left-[-100px]
w-[350px]
h-[350px]
rounded-full
bg-[#F0BC84]/30
blur-3xl"
>
</div>


{/* Bottom coffee glow */}

<div
className="
absolute
bottom-[-100px]
right-[-100px]
w-[450px]
h-[450px]
rounded-full
bg-[#8B5E3C]/35
blur-3xl"
>
</div>


{/* Center cafe light */}

<div
className="
absolute
top-[35%]
left-[40%]
w-[280px]
h-[280px]
rounded-full
bg-[#FFD8A8]/20
blur-3xl"
>
</div>


{/* Extra accent */}

<div
className="
absolute
bottom-[15%]
left-[15%]
w-[220px]
h-[220px]
rounded-full
bg-[#A66A43]/20
blur-3xl"
>
</div>


<div className="relative z-10">

{children}

</div>

</div>

)

}

export default PageLayout