import { useParams, Link } from 'react-router-dom';
import data from '../data/data.json';
import Header from '../components/Header';
import CategoryCards from '../components/CategoryCards';
import ButtonHero from '../components/ButtonHero';
import Footer from '../components/Footer';

export default function CategoryPage() {
  const { category } = useParams();
  const filteredProducts = data.filter(p => p.category === category);

  return (
    <div>
      <Header />

      <div className='bg-black h-[190px] md:h-[240px] flex justify-center'>

      <h1 className="p-5 text-white text-4xl font-bold uppercase self-center text-center mb-12">{category}</h1>

      </div>
    
    
    <main className="px-6 py-12 container mx-auto">

      <div className="space-y-20">
        {filteredProducts.map((product, index) => (
          <div key={product.id} className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} gap-10 items-center`}>
            <img
              src={product.image.desktop}
              alt={product.name}
              className="w-full md:w-[680px] md:h-[352px] lg:w-1/2 rounded-lg"
            />

            <div className="lg:w-1/2 text-center lg:text-left space-y-4">
              {product.new && (
                <p className="text-[#D87D4A] tracking-widest uppercase text-sm">New Product</p>
              )}
              <h2 className="text-3xl font-bold uppercase">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <Link to={`/product/${product.slug}`}>
                <button className="mt-4 bg-[#D87D4A] text-white py-2 px-6 uppercase tracking-wider hover:bg-[#FBAF85]">
                  See Product
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

    <CategoryCards />

    <ButtonHero />
    </main>

    <Footer />
    </div>
  );
}
