function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#FFF7F0] via-[#E8C9A7] to-[#8B5E3C]">

      <div className="flex flex-col items-center">

        {/* Steam */}
        <div className="relative h-20 w-24 flex justify-center gap-2">

          <span className="steam steam-one"></span>
          <span className="steam steam-two"></span>
          <span className="steam steam-three"></span>

        </div>

        {/* Cup */}
        <div className="relative animate-cup-float">

          <div className="w-24 h-20 bg-white rounded-b-[35px] shadow-xl relative">

            {/* Coffee */}
            <div className="absolute top-2 left-2 right-2 h-5 bg-[#6F4E37] rounded-full"></div>

          </div>

          {/* Handle */}
          <div className="absolute right-[-20px] top-6 w-7 h-10 border-[6px] border-white rounded-r-full"></div>

        </div>

        {/* Shadow */}
        <div className="w-20 h-3 bg-black/10 rounded-full mt-4 animate-shadow"></div>

        <h1 className="mt-7 text-4xl font-serif font-bold text-[#5A3926]">
          CoffeeCorner
        </h1>

        <p className="mt-2 text-[#7A563F] italic animate-pulse">
          Brewing something delicious...
        </p>

      </div>

    </div>
  );
}

export default Loader;