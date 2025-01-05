import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/use-auth";
import { useEffect } from "react";

interface DiscordSectionProps {
  username: string;
  tag: string;
  onUsernameChange: (value: string) => void;
  onTagChange: (value: string) => void;
}

export function DiscordSection({ 
  username, 
  tag, 
  onUsernameChange, 
  onTagChange 
}: DiscordSectionProps) {
  const { user } = useAuth();

  // Remplir automatiquement le nom d'utilisateur Discord quand l'utilisateur est connecté
  useEffect(() => {
    if (user) {
      onUsernameChange(user.username);
    }
  }, [user, onUsernameChange]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">
        <span className="text-[#31D7F4]">Entrez votre compte</span>
        <br />
        <span className="text-white">Discord !</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="discord-username" className="text-sm text-white/70">
            Username
          </Label>
          <Input
            id="discord-username"
            placeholder="username"
            value={username}
            onChange={(e) => onUsernameChange(e.target.value)}
            className="bg-[#0A0B14] border-[#1E2130] text-white h-14 rounded-2xl text-lg"
            disabled={!!user} // Désactiver si l'utilisateur est connecté
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="discord-tag" className="text-sm text-white/70">
            Tag
          </Label>
          <Input
            id="discord-tag"
            placeholder="#0000"
            value={tag}
            onChange={(e) => onTagChange(e.target.value)}
            className="bg-[#0A0B14] border-[#1E2130] text-white h-14 rounded-2xl text-lg"
            maxLength={5}
            disabled={!!user} // Désactiver si l'utilisateur est connecté
          />
        </div>
      </div>
    </div>
  );
}