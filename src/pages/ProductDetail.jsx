import { useParams, Link, useNavigate } from 'react-router-dom';
import data from '../data/data.json';
import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryCards from '../components/CategoryCards';
import ButtonHero from '../components/ButtonHero';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const product = data.find(p => p.slug === slug);

  if (!product) return <div className="text-center py-20">Product not found</div>;

  const handleAdd = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div>
      <Header />
    <main className="px-6 py-8 container mx-auto space-y-20">
      <button className="text-sm text-gray-600 mb-4" onClick={() => navigate(-1)}>
         Go Back
      </button>

      
      <div className="flex flex-col md:flex-row items-center gap-12">
        <img src={product.image.desktop.replace('./', '/')} alt={product.name} className="w-full md:w-1/2 md:h-[480px] lg:h-full rounded-lg" />
        <div className="space-y-4 text-center md:text-left md:w-1/2">
          {product.new && <p className="uppercase text-[#D87D4A] tracking-widest text-sm">New product</p>}
          <h1 className="text-3xl font-bold uppercase">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="font-bold text-xl">$ {product.price.toLocaleString()}</p>

          
          <div className="flex items-center gap-4">
            <div className="flex bg-[#F1F1F1]">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-2">-</button>
              <span className="px-4 py-2">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="px-3 py-2">+</button>
            </div>
            <button onClick={handleAdd} className="bg-[#D87D4A] text-white py-2 px-6 uppercase tracking-wide hover:bg-[#FBAF85]">Add to cart</button>
          </div>
        </div>
      </div>

      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-bold uppercase mb-4">Features</h2>
          <p className="text-gray-600 whitespace-pre-line">{product.features}</p>
        </div>

        <div className="md:flex lg:flex-col md:justify-between lg:w-1/3">
          <h2 className="text-2xl font-bold uppercase mb-4">In the box</h2>
          <ul className="space-y-2">
            {product.includes.map((item, index) => (
              <li key={index}>
                <span className="text-[#D87D4A] font-semibold">{item.quantity}x</span>{' '}
                <span className="text-gray-700">{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <img src={product.gallery.first.desktop} alt="" className="rounded-lg" />
          <img src={product.gallery.second.desktop} alt="" className="rounded-lg" />
        </div>
        <img src={product.gallery.third.desktop} alt="" className="rounded-lg md:row-span-2" />
      </div>

      
      <section className="text-center">
        <h2 className="text-2xl font-bold uppercase mb-8">You may also like</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {product.others.map((other, index) => (
            <div key={index} className="space-y-4">
              <img src={other.image.desktop.replace('./', '/')} alt={other.name} className="w-full rounded-lg" />
              <h3 className="text-lg font-bold uppercase">{other.name}</h3>
              <Link to={`/product/${other.slug}`}>
                <button className="bg-[#D87D4A] text-white py-2 px-5 uppercase tracking-wider hover:bg-[#FBAF85]">
                  See Product
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CategoryCards />

      <ButtonHero />
    </main>
    <Footer />
    </div>
  );
}
