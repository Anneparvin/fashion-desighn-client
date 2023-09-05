import React from 'react';

const Banner = () => {
    return (
        <div>
            <h1 className='text-4xl text-emerald-700 font-bold text-center'>ShowCase</h1>
           <section>
  <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-xl text-center">
          <h2 class="text-2xl font-bold text-white md:text-3xl">
          website is a great way to showcase your fashion designs
          </h2>

          <p class="hidden text-white/90 sm:mt-4 sm:block">
          Creating a fashion design website is a great way to showcase your fashion designs, connect with your audience, and potentially sell your creations online. Choose a reliable web hosting provider. Some popular options include Bluehost, SiteGround, and HostGator.
          </p>

          <div class="mt-4 md:mt-8">
            <a
              href="#"
              class="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <img
          alt="Student"
          src="https://i.ibb.co/DVgkNND/istockphoto-511918608-612x612.jpg"
          class="h-40 w-full object-cover sm:h-56 md:h-full"
        />

        <img
          alt="Student"
          src="https://i.ibb.co/WsMntYV/istockphoto-1320805954-612x612.jpg"
          class="h-40 w-full object-cover sm:h-56 md:h-full"
        />
      </div>
    </div>
  </div>
</section> 
        </div>
    );
};

export default Banner;