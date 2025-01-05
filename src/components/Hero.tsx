import React from 'react';

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
          alt="Collection hiver"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Collection Hiver 2024
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Découvrez notre nouvelle collection de vêtements élégants et confortables pour affronter l'hiver avec style.
        </p>
        <div className="mt-10">
          <a href="#" className="inline-block bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100">
            Découvrir
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;