import { Rocket } from 'lucide-react';
import { useState } from 'react';
import { TermsDialog } from './TermsDialog';
import { ConfirmationDialog } from './ConfirmationDialog';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/use-auth';

interface ActionButtonProps {
  disabled?: boolean;
  discordUsername: string;
  orderDetails: {
    discordUsername: string;
    currentRank: string;
    desiredRank: string;
    gameMode: string;
    options: {
      playWithBooster: boolean;
      priorityOrder: boolean;
      extraWin: boolean;
      tournamentTitle: boolean;
    };
    totalPrice: number;
  };
}

export function ActionButton({ disabled, discordUsername, orderDetails }: ActionButtonProps) {
  const [showTerms, setShowTerms] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { toast } = useToast();
  const { user, login } = useAuth();

  const handleClick = () => {
    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Veuillez vous connecter avec Discord pour commander un boost",
        variant: "destructive"
      });
      login();
      return;
    }

    if (!discordUsername) {
      toast({
        title: "Information manquante",
        description: "Veuillez entrer votre nom d'utilisateur Discord",
        variant: "destructive"
      });
      return;
    }
    setShowTerms(true);
  };

  const handleAccept = () => {
    if (termsAccepted) {
      setShowTerms(false);
      setShowConfirmation(true);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={disabled}
        className="w-full md:w-auto group relative bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-10 py-4 rounded-xl hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-indigo-500/30 disabled:opacity-50 disabled:hover:scale-100"
      >
        <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        <div className="flex items-center gap-2 justify-center">
          <Rocket className="w-5 h-5" />
          <span className="font-semibold">
            {!user ? "Connectez-vous pour commander" : "Commencez Boost Maintenant"}
          </span>
          <span className="font-bold">→</span>
        </div>
      </button>

      <TermsDialog
        open={showTerms}
        onOpenChange={setShowTerms}
        onAccept={handleAccept}
        accepted={termsAccepted}
        onAcceptedChange={setTermsAccepted}
      />

      <ConfirmationDialog
        open={showConfirmation}
        onOpenChange={setShowConfirmation}
        orderDetails={orderDetails}
      />
    </>
  );
}