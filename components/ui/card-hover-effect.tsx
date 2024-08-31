"use client";

import { useEffect, useState } from "react";
import { LampCard } from "./lamp-card";
import { getFirebaseData, setFirebaseData } from "@/lib/firebase";
import { cn } from "@/lib/utils";
import AllLampControls from "./AllLampsControls";
import ServoControl from "../ServoControl";
import PirLamp from "../PirLamp";

interface LampItem {
  title: string;
  description: string;
}

interface HoverEffectProps {
  items: LampItem[];
  className?: string;
}

export const HoverEffect = ({ items, className }: HoverEffectProps) => {
  const [activeIndexes, setActiveIndexes] = useState<boolean[]>([]);
  const [lamps, setLamps] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);

  const fetchLampData = async () => {
    setLoading(true);

    const lampData = await getFirebaseData("/lampStatus");
    setLamps(lampData);

    const newActiveIndexes = items.map((_, idx) => {
      return lampData[`lamp${idx + 1}`];
    });
    setActiveIndexes(newActiveIndexes);
  };

  useEffect(() => {
    setLoading(true);
    fetchLampData().finally(() => setLoading(false));
  }, [items]);

  const toggleLamp = async (idx: number) => {
    setLoading(true);
    try {
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
    } catch (error) {
      console.error("Error toggling lamp:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleAllLamps = async (state: boolean) => {
    setLoading(true);

    try {
      const updateLamps: Record<string, boolean> = {};
      for (let i = 0; i < items.length; i++) {
        updateLamps[`lamp${i + 1}`] = state;
        await setFirebaseData(`/lampStatus/lamp${i + 1}`, state);
      }
      setLamps(updateLamps);
      setActiveIndexes(Array(items.length).fill(state));
    } catch (error) {
      console.error("Error toggling all lamps:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("py-10", className)}>
      <AllLampControls
        toggleAllLamps={toggleAllLamps}
        loading={loading}
        allLampsOn={activeIndexes.every((status) => status)}
        allLampsOff={activeIndexes.every((status) => !status)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <LampCard
            key={item.title}
            item={item}
            idx={idx}
            lamps={lamps}
            activeIndexes={activeIndexes}
            toggleLamp={toggleLamp}
            loading={loading}
          />
        ))}
        <ServoControl />
      </div>
    </div>
  );
};
