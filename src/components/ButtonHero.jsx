import React from 'react'

export default function ButtonHero() {

  return (
    <div className='space-y-10 my-24  md:mx-5 lg:px-10 flex flex-col-reverse lg:flex-row justify-center'>
        <div className='pt-14 lg:p-5 flex flex-col justify-center align-middle text-left w-[320px] h-[300px] md:w-[580px] md:h-[540px]'>
            <h1 className='py-5 lg:px-0  text-3xl md:text-5xl md:text-center lg:text-left font-bold'>BRINGING YOU THE <span className='text-[#D87D4A]'>BEST</span> AUDIO GEAR</h1>
            <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>

        <div className='lg:p-4'>
            <img src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg" alt="" className='w-[320px] h-[300px] md:w-[689px] lg:w-[580px] md:h-[600px] lg:h-[540px] object-cover rounded-2xl' />
        </div>
    </div>
  )
}
