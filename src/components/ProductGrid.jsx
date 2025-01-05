import React from 'react';
import { Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Pantalon cargo kaki',
    description: 'Pantalon cargo kaki, coupe droite, avec poches latérales et cordon de serrage à la taille',
    price: '49.99€',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
  },
  {
    id: 2,
    name: 'Pull rose à manches longues',
    description: 'Pull rose clair à manches longues avec un motif floral et inscription "Flowers in the Attic"',
    price: '39.99€',
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
  },
  {
    id: 3,
    name: 'Manteau noir',
    description: 'Manteau long noir avec capuche et fermeture éclair',
    price: '89.99€',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
  }
];

const ProductGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Nos produits phares</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-w-4 aspect-h-5 bg-gray-100 rounded-lg overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
              </button>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  <a href="#" className="hover:underline">
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.description}</p>
              </div>
              <p className="text-lg font-medium text-gray-900">{product.price}</p>
            </div>
            <button className="mt-4 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;