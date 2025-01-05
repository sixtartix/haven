export function OurStory() {
  return (
    <div className="py-20 bg-[#070716]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-[#31D7F4]">Notre Histoire</span>
            </h2>
            <div className="space-y-4 text-gray-400">
              <p>
                Tout a commencé avec une simple idée : créer un service de boosting qui place 
                l'expérience client au cœur de ses préoccupations. Fondé par une équipe de 
                joueurs passionnés de Grand Champion, TurboHaven est né de la frustration face 
                aux services de boosting existants qui manquaient de professionnalisme et de transparence.
              </p>
              <p>
                En 2019, nous avons commencé avec une petite équipe de 5 boosters. Aujourd'hui, 
                nous sommes fiers de compter plus de 50 professionnels certifiés, tous rigoureusement 
                sélectionnés pour leurs compétences exceptionnelles et leur engagement envers 
                l'excellence du service client.
              </p>
              <p>
                Notre croissance rapide témoigne de notre engagement inébranlable envers la qualité 
                et la satisfaction de nos clients. Avec plus de 10 000 boosts réussis et un taux 
                de satisfaction client de 99%, nous continuons d'innover et d'améliorer nos services 
                chaque jour.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Gaming Setup"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}