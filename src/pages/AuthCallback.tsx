import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';
import { Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const API_URL = import.meta.env.VITE_API_URL;

export function AuthCallback() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const handleCallback = async () => {
      const code = new URLSearchParams(window.location.search).get('code');
      
      if (!code) {
        console.error("Pas de code d'autorisation trouvé");
        toast({
          variant: "destructive",
          title: "Erreur d'authentification",
          description: "Pas de code d'autorisation trouvé"
        });
        navigate('/');
        return;
      }

      try {
        console.log("Tentative de connexion au serveur...");
        console.log("API URL:", API_URL);
        
        const response = await fetch(`${API_URL}/auth/discord/callback`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
          credentials: 'include' // Important pour les cookies
        });

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const userData = await response.json();
        console.log("Données utilisateur reçues:", userData);
        
        if (!userData.id || !userData.username || !userData.avatar) {
          throw new Error("Données utilisateur invalides");
        }

        setUser(userData);
        toast({
          title: "Connexion réussie",
          description: `Bienvenue, ${userData.username} !`
        });
        
        navigate('/');
        
      } catch (error) {
        console.error('Erreur détaillée:', error);
        toast({
          variant: "destructive",
          title: "Erreur d'authentification",
          description: "Impossible de se connecter au serveur"
        });
        navigate('/');
      }
    };

    handleCallback();
  }, [navigate, setUser, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-8 h-8 animate-spin text-[#31D7F4]" />
        <p className="text-white">Connexion en cours...</p>
      </div>
    </div>
  );
} 