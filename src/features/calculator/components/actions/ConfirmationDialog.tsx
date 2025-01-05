import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessagesSquare, CreditCard, Bitcoin, Loader2 } from "lucide-react";
import { useState } from "react";
import { OrderSuccessDialog } from "./OrderSuccessDialog";
import { useToast } from "@/hooks/use-toast";

interface ConfirmationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
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

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const ranks = {
  1: 'Bronze I',
  2: 'Bronze II',
  3: 'Bronze III',
  4: 'Silver I',
  5: 'Silver II',
  6: 'Silver III',
  7: 'Gold I',
  8: 'Gold II',
  9: 'Gold III',
  10: 'Platinum I',
  11: 'Platinum II',
  12: 'Platinum III',
  13: 'Diamond I',
  14: 'Diamond II',
  15: 'Diamond III',
  16: 'Champion I',
  17: 'Champion II',
  18: 'Champion III',
  19: 'Grand Champion I',
  20: 'Grand Champion II'
};

const getRankName = (rankId: number) => ranks[rankId] || 'Unknown Rank';

export function ConfirmationDialog({ 
  open, 
  onOpenChange, 
  orderDetails 
}: ConfirmationDialogProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleConfirm = async () => {
    try {
      setIsSubmitting(true);
      
      const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
      
      const embed = {
        title: '🚀 Nouvelle commande de boost',
        color: 0x31D7F4,
        fields: [
          {
            name: '👤 Client Discord',
            value: orderDetails.discordUsername,
            inline: true,
          },
          {
            name: '🎮 Mode de jeu',
            value: orderDetails.gameMode,
            inline: true,
          },
          {
            name: '📊 Progression',
            value: `De: ${getRankName(Number(orderDetails.currentRank))}\nVers: ${getRankName(Number(orderDetails.desiredRank))}`,
            inline: false,
          },
          {
            name: '🔧 Options sélectionnées',
            value: Object.entries(orderDetails.options)
              .filter(([_, value]) => value)
              .map(([key, _]) => {
                switch(key) {
                  case 'playWithBooster': return '🎮 Joue avec le booster';
                  case 'priorityOrder': return '⚡ Commande prioritaire';
                  case 'extraWin': return '🎯 Win supplémentaire';
                  case 'tournamentTitle': return '🏆 Titre de tournoi';
                  default: return '';
                }
              })
              .join('\n') || 'Aucune option',
            inline: false,
          },
          {
            name: '💰 Prix total',
            value: `€${orderDetails.totalPrice.toFixed(2)}`,
            inline: true,
          }
        ],
        footer: {
          text: '⚠️ Merci de contacter le client dans les 48h maximum'
        },
        timestamp: new Date().toISOString()
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ embeds: [embed] })
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi de la commande');
      }
      
      onOpenChange(false);
      setShowSuccess(true);
      
    } catch (error) {
      console.error('Erreur webhook:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi de votre commande. Veuillez réessayer ou nous contacter.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md bg-[#0A0B14] border-[#1E2130] text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#31D7F4]">
              Confirmation de commande
            </DialogTitle>
            <DialogDescription className="text-white/70">
              Voici les prochaines étapes de votre boost
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-[#1E2130] p-4 rounded-lg">
                <MessagesSquare className="w-6 h-6 text-[#31D7F4] mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Contact Discord</h3>
                  <p className="text-sm text-white/70">
                    Un booster vous contactera très prochainement sur Discord pour commencer votre boost.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#1E2130] p-4 rounded-lg">
                <div className="flex gap-2">
                  <CreditCard className="w-6 h-6 text-[#31D7F4] mt-1" />
                  <Bitcoin className="w-6 h-6 text-[#31D7F4] mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Paiement</h3>
                  <p className="text-sm text-white/70">
                    Le paiement pourra être effectué par PayPal ou en cryptomonnaie.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <p className="text-sm text-yellow-500">
                  Si vous n'êtes pas contacté dans les 48h, veuillez contacter notre assistance ou refaire votre commande sur le site.
                </p>
              </div>
            </div>

            <DialogFooter>
              <Button
                onClick={handleConfirm}
                disabled={isSubmitting}
                className="w-full bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  'Envoyer la commande'
                )}
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>

      <OrderSuccessDialog 
        open={showSuccess} 
        onOpenChange={setShowSuccess}
      />
    </>
  );
}