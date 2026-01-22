import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text */}
        <div className="text-center md:text-left">
          <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>

          <p className="text-gray-600 mt-4 max-w-md mx-auto md:mx-0">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality.
          </p>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full">
            Shop Now
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 text-center md:text-left">
            <div>
              <p className="text-xl text-gray-300 font-bold">200+</p>
              <p className="text-xs text-gray-500">Brands</p>
            </div>
            <div>
              <p className="text-xl text-gray-300 font-bold">2,000+</p>
              <p className="text-xs text-gray-500">Products</p>
            </div>
            <div>
              <p className="text-xl text-gray-300 font-bold">30,000+</p>
              <p className="text-xs text-gray-500">Customers</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px]">
          <img
            src="/hero.webp"
            alt="Fashion"
            className="object-contain "
          />
        </div>
      </div>
    </section>
  );
}
