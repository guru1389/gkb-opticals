export default function ProductInfo() {
  return (
    <div className="pt-8">

      <p className="text-sm text-gray-500 mb-4">
        Mont Blanc • Men
      </p>

      <h1
        className="text-5xl font-semibold leading-tight mb-6"
      >
        Mont Blanc MB0075O
        Frame Silver Male Rimless Metal
      </h1>

      <p className="text-sm text-gray-500 mb-2">
        Model No: MB0075O
      </p>

      <h2 className="text-5xl font-bold mb-8">
        ₹ 23,700
      </h2>

      <div className="flex gap-4 mb-8">

        <button
          className="
            flex-1 h-14 rounded-full bg-black text-white font-medium hover:bg-neutral-800 transition flex items-center justify-center gap-2 cursor-pointer w-full px-6 py-4
          "
        >
          Buy Now
        </button>

        <button
          className="flex-1 h-14 rounded-full border border-black text-black font-medium hover:bg-black hover:text-white transition flex items-center justify-center gap-2 cursor-pointer w-full px-6 py-4
          "
        >
          Add To Cart
        </button>

      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-2 gap-3">

        <button className="flex items-center gap-3 p-4 rounded-2xl bg-white/60 border border-black/5 hover:border-black/30 transition-colors text-center cursor-pointer w-full justify-center">        
          <div className="flex flex-col gap-0.5">
            <span className="text-font-main font-normal font-avenir text-[10px] tracking-[0.15em] opacity-60">Visit</span>
            <span className="text-font-main font-bold font-avenir text-xs">Try in a store near you</span>
          </div>
        </button>

      </div>

     

    </div>
  );
}