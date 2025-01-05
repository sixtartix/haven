const team = [
  {
    name: "Lilidox",
    role: "Fondateur & Ancien Semi-Pro",
    image: "https://cdn.discordapp.com/attachments/930217137140813855/1323360620321443863/Black_Ethereal_Trendy_Modern_Album_Cover.png?ex=67743b1e&is=6772e99e&hm=c76d418e348b7fcc78a0001dfc71ca38748dae0818f4cfc6c37472a4e5be9aad&"
  },
  {
    name: "Blitz",
    role: "Chef des Boosters & Coach pour Blitz Academy ",
    image: "https://cdn.discordapp.com/attachments/930217137140813855/1323362630911660144/image.png?ex=67743cfe&is=6772eb7e&hm=e2aaa76f00738c25a5f8ce6096758a70bac492fe0f42722a663c2d0b177f44c9&"
  },
  {
    name: "Holmes",
    role: "Support Client",
    image: "https://media.discordapp.net/attachments/930217137140813855/1323363333272768602/image.png?ex=67743da5&is=6772ec25&hm=e9eb4dda14034e2dea66fb016426b09b228a2a6620f9096888e29c0d1427f064&=&format=webp&quality=lossless"
  }
];

export function TeamSection() {
  return (
    <div className="py-20 bg-[#070716]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            <span className="text-[#31D7F4]">Notre Équipe</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Des passionnés dévoués à votre succès
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-[#0B0B1E] rounded-xl overflow-hidden border border-[#1E2130] hover:border-[#31D7F4] transition-all duration-300"
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-[#31D7F4]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}