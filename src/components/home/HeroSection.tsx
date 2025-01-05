import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-125 grayscale opacity-40"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src="https://media.graphassets.com/d8EMXMdRkWK76Olm3Qbq" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row items-center gap-12">
        {/* Left content */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-[#31D7F4]">Rocket</span>
            <br />
            <span className="text-[#31D7F4]">League</span>
            <br />
            <span className="text-white">boosting !</span>
          </h1>
          
          <p className="text-gray-200 text-lg mb-8 max-w-xl">
            Obtenez le meilleur service de boost de rang Rocket League avec une variété de fonctionnalités leader de l'industrie.
          </p>

          <button 
            className="animated-button"
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
              <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
            </svg>
            <span className="text">Calculer le Prix Du Boost</span>
          </button>
        </div>

        {/* Right content - Car Image */}
        <div className="flex-1 relative flex items-center justify-center">
          <img 
            src="https://www.imagensempng.com.br/wp-content/uploads/2020/10/0007.png" 
            alt="Rocket League Cars" 
            className="w-[150%] max-w-none transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
}