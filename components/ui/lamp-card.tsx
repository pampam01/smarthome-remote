"use client";

import { LampButton } from "./lamp-button";
import { Card, CardTitle, CardDescription } from "./card-component";
import Image from "next/image";

interface LampCardProps {
  item: { title: string; description: string };
  idx: number;
  isActive: boolean;
  lamps: Record<string, boolean>;
  setLamps: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  setActiveIndexes: React.Dispatch<React.SetStateAction<boolean[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LampCard = ({
  item,
  idx,
  isActive,
  lamps,
  setLamps,
  setActiveIndexes,
  loading,
  setLoading,
}: LampCardProps) => {
  return (
    <div className="relative group block p-2 h-full w-full">
      <Card>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription className="text-white mt-2">
          {item.description}
        </CardDescription>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="h-full w-full flex items-center justify-center">
            <Image
              src={isActive ? "/bulb_on.jpg" : "/bulb_off.jpg"}
              alt="bulb"
              width={200}
              height={200}
            />
          </div>
          <LampButton
            idx={idx}
            isActive={isActive}
            lamps={lamps}
            setLamps={setLamps}
            setActiveIndexes={setActiveIndexes}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      </Card>
    </div>
  );
};
