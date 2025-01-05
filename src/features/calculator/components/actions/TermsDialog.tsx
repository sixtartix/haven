import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAccept: () => void;
  accepted: boolean;
  onAcceptedChange: (accepted: boolean) => void;
}

export function TermsDialog({
  open,
  onOpenChange,
  onAccept,
  accepted,
  onAcceptedChange,
}: TermsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-[#0A0B14] border-[#1E2130] text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#31D7F4]">
            Conditions d'utilisation
          </DialogTitle>
          <DialogDescription className="text-white/70">
            Veuillez lire et accepter nos conditions d'utilisation
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4 text-sm text-white/70">
            <p>
              En utilisant notre service de boost, vous acceptez les conditions suivantes :
            </p>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-white">1. Service de Boost</h3>
              <p>
                Nous nous engageons à fournir un service de boost professionnel et efficace
                pour améliorer votre rang dans Rocket League.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-white">2. Sécurité du compte</h3>
              <p>
                Votre compte sera traité avec la plus grande confidentialité et sécurité.
                Aucune information ne sera partagée avec des tiers.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-white">3. Délais</h3>
              <p>
                Le boost commencera dans les 48h suivant la confirmation de la commande.
                La durée dépendra du service choisi.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-white">4. Paiement</h3>
              <p>
                Le paiement sera effectué de manière sécurisée via PayPal ou crypto-monnaie.
                Aucun remboursement ne sera possible une fois le boost commencé.
              </p>
            </div>
          </div>
        </ScrollArea>

        <div className="flex items-center space-x-2 mt-4">
          <Checkbox
            id="terms"
            checked={accepted}
            onCheckedChange={(checked) => onAcceptedChange(checked as boolean)}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            J'accepte les conditions d'utilisation
          </label>
        </div>

        <DialogFooter>
          <Button
            onClick={onAccept}
            disabled={!accepted}
            className="w-full bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white"
          >
            Continuer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}