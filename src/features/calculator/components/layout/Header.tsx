import { Shield, Users } from 'lucide-react';

export function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-3xl font-bold mb-4 md:mb-0">
        <span className="text-[#31D7F4]">Calculez le prix de</span>
        <br />
        votre <span className="text-white">boost !</span>
      </h1>
      
      <div className="flex gap-4">
        <div className="flex items-center gap-2 bg-[#1E2130] px-4 py-2 rounded-lg relative overflow-hidden">
          <Shield className="text-[#31D7F4]" size={20} />
          <span className="purple-shine font-bold">100% garantie de satisfaction</span>
        </div>
        <div className="flex items-center gap-2 bg-[#1E2130] px-4 py-2 rounded-lg relative overflow-hidden">
          <Users className="text-[#31D7F4]" size={20} />
          <span className="purple-shine font-bold">38 Boosters En Ligne</span>
        </div>
      </div>
    </div>
  );
}