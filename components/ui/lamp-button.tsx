"use client";

import { setFirebaseData } from "@/lib/firebase";
import { Button } from "./button";

interface LampButtonProps {
  idx: number;
  isActive: boolean;
  lamps: Record<string, boolean>;
  setLamps: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  setActiveIndexes: React.Dispatch<React.SetStateAction<boolean[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LampButton = ({
  idx,
  isActive,
  lamps,
  setLamps,
  setActiveIndexes,
  loading,
  setLoading,
}: LampButtonProps) => {
  const toggleLamp = async () => {
    setLoading(true);
    try {
      if (idx === 6) {
        const updatedLampState = !(lamps["lamp7"] || lamps["lamp8"]);

        setLamps((prevLamps) => ({
          ...prevLamps,
          lamp7: updatedLampState,
          lamp8: updatedLampState,
        }));

        setActiveIndexes((prev) => {
          const newActiveIndexes = [...prev];
          newActiveIndexes[6] = updatedLampState;
          return newActiveIndexes;
        });

        await setFirebaseData("/lampStatus/lamp7", updatedLampState);
        await setFirebaseData("/lampStatus/lamp8", updatedLampState);
      } else {
        const updatedLampState = !lamps[`lamp${idx + 1}`];

        setLamps((prevLamps) => ({
          ...prevLamps,
          [`lamp${idx + 1}`]: updatedLampState,
        }));

        setActiveIndexes((prev) => {
          const newActiveIndexes = [...prev];
          newActiveIndexes[idx] = updatedLampState;
          return newActiveIndexes;
        });

        await setFirebaseData(`/lampStatus/lamp${idx + 1}`, updatedLampState);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={toggleLamp}
      variant={isActive ? "default" : "outline"}
      disabled={loading}
    >
      <span>{isActive ? "ON" : "OFF"}</span>
    </Button>
  );
};
