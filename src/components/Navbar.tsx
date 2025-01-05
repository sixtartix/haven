import React from 'react';
import { Search, ShoppingBag, Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold">Pois Rayures et Caro</h1>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a href="#" className="text-gray-900 hover:text-gray-500 px-3 py-2">Nouveau</a>
            <a href="#" className="text-gray-900 hover:text-gray-500 px-3 py-2">Femme</a>
            <a href="#" className="text-gray-900 hover:text-gray-500 px-3 py-2">Homme</a>
            <a href="#" className="text-gray-900 hover:text-gray-500 px-3 py-2">Promotions</a>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="h-6 w-6 text-gray-400 hover:text-gray-500 cursor-pointer" />
            <Heart className="h-6 w-6 text-gray-400 hover:text-gray-500 cursor-pointer" />
            <ShoppingBag className="h-6 w-6 text-gray-400 hover:text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;