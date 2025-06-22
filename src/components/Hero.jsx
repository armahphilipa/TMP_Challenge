import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-black text-white py-24 px-6 bg-[url('/assets/home/desktop/image-hero.jpg')] bg-cover bg-center">
      <div className="container mx-auto max-w-xl text-center md:text-left">
        <p className="uppercase tracking-widest text-sm opacity-50">New product</p>
        <h1 className="text-4xl md:text-6xl font-bold uppercase my-4">XX99 Mark II Headphones</h1>
        <p className="opacity-75 mb-6">
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </p>
        <Link to="/product/xx99-mark-two-headphones">
          <button className="bg-orange-500 text-white py-3 px-6 uppercase tracking-wider hover:bg-orange-600">
            See Product
          </button>
        </Link>
      </div>
    </section>
  );
}
