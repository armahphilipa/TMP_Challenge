import Navbar from './Navbar';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-14 mt-16 m-0">
      <div className="container mx-auto text-center space-y-6">
        <div className="hidden md:flex justify-around gap-10 mt-6">
          <div className='text-left'>
            <img src='/assets/shared/desktop/logo.svg' alt="Logo" />
            <p className="text-sm max-w-lg mx-auto text-white py-4">
              Audiophile is an all-in-one stop to fulfill your audio needs. We're a small team of music lovers
              and sound specialists who are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className="pt-4 text-xs text-white">Copyright 2025. All Rights Reserved</p>
          </div>
          <div className='flex flex-col justify-between text-left'>
            <Navbar />
            <div className='flex gap-4 justify-end'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white hover:text-[#D87D4A] transition-colors duration-300 cursor-pointer"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.675 0h-21.35C.594 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.488V14.708h-3.13v-3.62h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.794.143v3.24h-1.917c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.62h-3.12V24h6.116C23.406 24 24 23.407 24 22.674V1.326C24 .594 23.407 0 22.675 0z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white hover:text-[#D87D4A] transition-colors duration-300 cursor-pointer"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 4.557a9.839 9.839 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184a4.917 4.917 0 0 0-8.38 4.482A13.951 13.951 0 0 1 1.671 3.149a4.917 4.917 0 0 0 1.523 6.573A4.897 4.897 0 0 1 .96 9.1v.062a4.917 4.917 0 0 0 3.946 4.818 4.902 4.902 0 0 1-2.212.084 4.919 4.919 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
              </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white hover:text-[#D87D4A] transition-colors duration-300 cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.848s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.772.13 4.665.387 3.763 1.29c-.902.902-1.16 2.009-1.218 3.289C2.014 5.869 2 6.278 2 9.537v4.926c0 3.259.014 3.668.072 4.948.058 1.28.316 2.387 1.218 3.289.902.902 2.009 1.16 3.289 1.218C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.28-.058 2.387-.316 3.289-1.218.902-.902 1.16-2.009 1.218-3.289.058-1.28.072-1.689.072-4.948V9.537c0-3.259-.014-3.668-.072-4.948-.058-1.28-.316-2.387-1.218-3.289-.902-.902-2.009-1.16-3.289-1.218C15.668.014 15.259 0 12 0zM12 5.838A6.162 6.162 0 1 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162a3.999 3.999 0 1 1 4-4 4.004 4.004 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 0 1.44 1.44 1.441 1.441 0 0 0-1.44-1.44z" />
                </svg>
            </div>
          </div>
            
          
        </div>
        
      </div>
    </footer>
  );
}
