import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LegalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: 'privacy' | 'terms';
}

export function LegalDialog({ open, onOpenChange, type }: LegalDialogProps) {
  const title = type === 'privacy' ? 'Politique de confidentialité' : 'Conditions d\'utilisation';
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl bg-[#0A0B14] border-[#1E2130] text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#31D7F4]">
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[70vh] pr-4">
          <div className="space-y-6 text-white/70">
            {type === 'privacy' ? (
              <>
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">1. Collecte des informations</h3>
                  <p>
                    Nous collectons les informations suivantes lorsque vous utilisez nos services :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Nom d'utilisateur Discord</li>
                    <li>Informations de rang Rocket League</li>
                    <li>Préférences de boost</li>
                    <li>Informations de paiement (traitées de manière sécurisée par nos prestataires de paiement)</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">2. Utilisation des informations</h3>
                  <p>
                    Nous utilisons vos informations pour :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fournir nos services de boost</li>
                    <li>Communiquer avec vous via Discord</li>
                    <li>Améliorer nos services</li>
                    <li>Traiter vos paiements</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">3. Protection des données</h3>
                  <p>
                    Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">4. Partage des informations</h3>
                  <p>
                    Nous ne partageons vos informations qu'avec :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Nos boosters certifiés (uniquement les informations nécessaires)</li>
                    <li>Nos prestataires de paiement sécurisés</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">5. Vos droits</h3>
                  <p>
                    Vous avez le droit de :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Accéder à vos données personnelles</li>
                    <li>Rectifier vos données</li>
                    <li>Supprimer vos données</li>
                    <li>Vous opposer au traitement</li>
                  </ul>
                </section>
              </>
            ) : (
              <>
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">1. Services de boost</h3>
                  <p>
                    En utilisant nos services, vous acceptez que :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Nos boosters accèdent à votre compte uniquement pour les services convenus</li>
                    <li>Le boost sera effectué dans les 48h suivant la confirmation</li>
                    <li>Les résultats peuvent varier selon les conditions de jeu</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">2. Paiements et remboursements</h3>
                  <p>
                    Nos conditions de paiement :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Les paiements sont sécurisés via PayPal ou crypto</li>
                    <li>Les prix sont garantis une fois la commande confirmée</li>
                    <li>Remboursement possible si le service n'a pas débuté</li>
                    <li>Garantie satisfaction ou remboursement sous conditions</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">3. Responsabilités</h3>
                  <p>
                    Vous vous engagez à :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fournir des informations exactes</li>
                    <li>Ne pas utiliser de logiciels tiers pendant le boost</li>
                    <li>Maintenir la confidentialité de vos identifiants</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">4. Sécurité du compte</h3>
                  <p>
                    Pour votre sécurité :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Changez votre mot de passe avant et après le boost</li>
                    <li>Activez l'authentification à deux facteurs</li>
                    <li>Ne partagez jamais vos identifiants publiquement</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">5. Modifications</h3>
                  <p>
                    Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur dès leur publication sur le site.
                  </p>
                </section>
              </>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}