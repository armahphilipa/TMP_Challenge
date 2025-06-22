import { Link } from 'react-router-dom';

export default function FeaturedProducts() {
  return (
    <section className="space-y-10 my-20">
      
      <div className="bg-[#D87D4A] bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-no-repeat bg-center md:bg-left-top md:bg-[length:944px_944px] rounded-lg px-6 md:px-10 py-16 md:py-0 min-h-[720px] lg:min-h-[560px] flex flex-col lg:flex-row items-center justify-center text-white text-center lg:text-left overflow-hidden">
  <img
    src="/assets/home/desktop/image-speaker-zx9.png"
    alt="ZX9 premium speaker"
    className="w-40 sm:w-56 lg:w-[410px] lg:h-[493px] mx-auto lg:bottom-[-50px] lg:mx-0 relative z-10 object-contain"
  />
  <div className="mt-10 lg:mt-0 lg:ml-20 max-w-md relative z-10 w-full md:w-[349px]">
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight">
      ZX9 Speaker
    </h2>
    <p className="opacity-75 my-6 md:text-sm">
      Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
    </p>
    <Link to="/product/zx9-speaker">
      <button className="bg-black text-white py-3 px-6 uppercase tracking-wide hover:bg-gray-800">
        See Product
      </button>
    </Link>
  </div>
</div>



      <div className="bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] bg-cover bg-center p-10 rounded-lg md:h-[320px]">
        <h2 className="text-3xl font-bold uppercase mb-4">ZX7 Speaker</h2>
        <Link to="/product/zx7-speaker">
          <button className="border border-black text-black py-2 px-5 uppercase tracking-wide hover:bg-black hover:text-white">
            See Product
          </button>
        </Link>
      </div>

      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-lg overflow-hidden">
          <img src="/assets/home/desktop/image-earphones-yx1.jpg" alt="YX1 Earphones" className="w-full h-full object-cover" />
        </div>
        <div className="bg-gray-100 flex flex-col justify-center p-10 rounded-lg">
          <h2 className="text-2xl font-bold uppercase mb-4">YX1 Earphones</h2>
          <Link to="/product/yx1-earphones">
            <button className="border border-black text-black py-2 px-5 uppercase tracking-wide hover:bg-black hover:text-white">
              See Product
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
