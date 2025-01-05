import { WashingMachineLoader } from "./WashingMachineLoader";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#0A0B14] flex items-center justify-center z-50">
      <WashingMachineLoader />
    </div>
  );
}