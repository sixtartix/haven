import React from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Restez informé</h2>
          <p className="mt-4 text-lg text-gray-600">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières offres et nouveautés
          </p>
          <form className="mt-8 flex max-w-md mx-auto gap-x-4">
            <input
              type="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              placeholder="Votre email"
            />
            <button
              type="submit"
              className="flex items-center gap-2 rounded-md bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <span>S'inscrire</span>
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;