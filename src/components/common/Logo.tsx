import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img 
        src="https://cdn.discordapp.com/attachments/930217137140813855/1322898898183917638/APOCALYPSE_6.png?ex=6773de9b&is=67728d1b&hm=c4e2c60dcd47484cb717b80777f67e76a0d5718c7eafec946cce9e9368f0adf9&" 
        alt="TurboHaven" 
        className="h-10 w-10"
      />
      <span className="font-bold text-xl">TurboHaven</span>
    </div>
  );
}