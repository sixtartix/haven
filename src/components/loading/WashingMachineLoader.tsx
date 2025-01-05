import { cn } from "@/lib/utils";

interface WashingMachineLoaderProps {
  className?: string;
}

export function WashingMachineLoader({ className }: WashingMachineLoaderProps) {
  return (
    <div className={cn("loader", className)} />
  );
}