import { Link, useNavigate } from "react-router-dom";
import { Logo } from "@/components/common/Logo";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { MessageSquareMore, LogOut } from "lucide-react";

export function Navbar() {
  const navigate = useNavigate();
  const { user, login, logout } = useAuth();

  console.log("Current user:", user);

  const handleCalculatorClick = () => {
    if (window.location.pathname === '/') {
      document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/?scrollTo=calculator');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B1E]/80 backdrop-blur-lg border-b border-[#1E2130]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              À propos de nous
            </Link>
            <Link 
              to="/faq" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3 bg-[#1E2130] px-4 py-2 rounded-lg">
                <img 
                  src={user.avatar}
                  alt={user.username}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-white font-medium">{user.username}</span>
                <button 
                  onClick={logout}
                  className="text-gray-400 hover:text-white transition-colors ml-2"
                  title="Déconnexion"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Button 
                onClick={login}
                className="flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4]"
              >
                <MessageSquareMore className="w-4 h-4" />
                Connexion avec Discord
              </Button>
            )}

            <button 
              onClick={handleCalculatorClick}
              className="animated-button compact"
            >
              <svg height="20" width="20" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
              </svg>
              <span className="text">Calculer le Prix</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}