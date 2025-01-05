import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

interface OrderSuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OrderSuccessDialog({ open, onOpenChange }: OrderSuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-[#0A0B14] border-[#1E2130] text-white">
        <DialogHeader className="text-center">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <DialogTitle className="text-2xl font-bold text-[#31D7F4]">
            Commande envoyée avec succès !
          </DialogTitle>
        </DialogHeader>
        <div className="text-center text-white/70 py-4">
          <p>Un booster vous contactera très prochainement sur Discord.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}