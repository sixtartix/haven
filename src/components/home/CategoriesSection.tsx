import { Clock, Target, SmilePlus } from 'lucide-react';

export function CategoriesSection() {
  const categories = [
    {
      icon: <Clock className="w-12 h-12 text-indigo-500" />,
      title: "Fiable",
      description: "Nous nous vantons de notes exceptionnelles sur Trustpilot et soutenons nos services avec une garantie de satisfaction inégalée de 100%."
    },
    {
      icon: <Target className="w-12 h-12 text-green-500" />,
      title: "Expérimenté",
      description: "Améliorez votre performance de placement avec l'aide de nos joueurs de niveau Grand Champion!"
    },
    {
      icon: <SmilePlus className="w-12 h-12 text-red-500" />,
      title: "Accueil 👋",
      description: "Notre engagement est de favoriser une atmosphère amicale et accueillante, garantissant une expérience que vous chérirez."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#0B0B1E]/50 border border-[#1E2130] backdrop-blur-lg transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="p-4 rounded-full bg-[#1E2130]/50 mb-4">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{category.title}</h3>
            <p className="text-gray-400 leading-relaxed">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}