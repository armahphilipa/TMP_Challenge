import { Link } from 'react-router-dom';

const categories = [
  { name: 'Headphones', image: '/assets/shared/desktop/image-category-thumbnail-headphones.png', link: '/category/headphones' },
  { name: 'Speakers', image: '/assets/shared/desktop/image-category-thumbnail-speakers.png', link: '/category/speakers' },
  { name: 'Earphones', image: '/assets/shared/desktop/image-category-thumbnail-earphones.png', link: '/category/earphones' }
];

export default function CategoryCards() {
  return (
    <section className="my-40 md:pb-32 lg:pb-0 grid gap-32 md:gap-6 md:grid-cols-3 text-center">
      {categories.map(({ name, image, link }) => (
        <Link
          to={link}
          key={name}
          className="relative bg-gray-100 pt-20 pb-6 px-6 rounded-lg hover:scale-105 transition block"
        >
          <img
            src={image}
            alt={name}
            className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-40 h-40 object-contain"
          />
          <h3 className="uppercase font-bold text-lg mt-4">{name}</h3>
          <p className="flex justify-center gap-2 text-sm text-gray-500 hover:text-[#D87D4A] mt-2 ">SHOP 
            <img src='/assets/shared/desktop/icon-arrow-right.svg' alt="arrow" />
          </p>
        </Link>
      ))}
    </section>
  );
}
