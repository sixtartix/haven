import { Shield, Users, Clock, Trophy } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Sécurité Garantie",
    description: "Votre compte est notre priorité. Nous utilisons des protocoles de sécurité avancés pour protéger vos données."
  },
  {
    icon: Users,
    title: "Équipe d'Élite",
    description: "Nos boosters sont parmi les meilleurs joueurs mondiaux, rigoureusement sélectionnés et formés."
  },
  {
    icon: Clock,
    title: "Service 24/7",
    description: "Notre équipe est disponible à tout moment pour répondre à vos besoins et questions."
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque boost, avec un engagement total envers votre satisfaction."
  }
];

export function OurValues() {
  return (
    <div className="py-20 bg-[#0B0B1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            <span className="text-[#31D7F4]">Nos Valeurs</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-[#070716] p-6 rounded-xl border border-[#1E2130] hover:border-[#31D7F4] transition-colors"
            >
              <value.icon className="w-12 h-12 text-[#31D7F4] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}