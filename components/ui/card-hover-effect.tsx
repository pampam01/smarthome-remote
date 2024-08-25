"use client";

import { useEffect, useState } from "react";
import { LampCard } from "./lamp-card";
import { getFirebaseData, setFirebaseData } from "@/lib/firebase";
import { cn } from "@/lib/utils";

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

  useEffect(() => {
    const fetchLampData = async () => {
      setLoading(true);
      try {
        const lampData = await getFirebaseData("/lampStatus");
        setLamps(lampData);

        const newActiveIndexes = items.map((_, idx) => {
          if (idx === 6) {
            return lampData["lamp7"] || lampData["lamp8"];
          } else {
            return lampData[`lamp${idx + 1}`];
          }
        });
        setActiveIndexes(newActiveIndexes);
      } catch (error) {
        console.error("Error fetching lamp data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLampData();
  }, [items]);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <LampCard
          key={item.title}
          item={item}
          idx={idx}
          isActive={idx === 6 ? activeIndexes[6] : activeIndexes[idx]}
          lamps={lamps}
          setLamps={setLamps}
          setActiveIndexes={setActiveIndexes}
          loading={loading}
          setLoading={setLoading}
        />
      ))}
    </div>
  );
};
