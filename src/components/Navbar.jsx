import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold">Pois Rayures et Caro</h1>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            <a href="#" className="text-gray-900 hover:text-gray-500 px-3 py-2 relative group">
              Nouveau
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-500 px-3 py-2 relative group">
              Femme
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-500 px-3 py-2 relative group">
              Homme
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-500 px-3 py-2 relative group">
              Promotions
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="h-6 w-6 text-gray-400 hover:text-gray-900 cursor-pointer transition-colors" />
            <Heart className="h-6 w-6 text-gray-400 hover:text-gray-900 cursor-pointer transition-colors" />
            <div className="relative">
              <ShoppingBag className="h-6 w-6 text-gray-400 hover:text-gray-900 cursor-pointer transition-colors" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Nouveau</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Femme</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Homme</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Promotions</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;