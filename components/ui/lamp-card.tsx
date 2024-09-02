"use client";

import { LampButton } from "./lamp-button";
import { Card, CardTitle, CardDescription } from "./card-component";
import Image from "next/image";
import { Button } from "./button";

interface LampCardProps {
  item: { title: string; description: string };
  idx: number;

  activeIndexes: boolean[];
  toggleLamp: (idx: number) => void;
  loading: boolean;
}

export const LampCard = ({
  item,
  idx,
  activeIndexes,
  toggleLamp,
  loading,
}: LampCardProps) => {
  return (
    <div className=" h-full w-full p-2 pb-0">
      <span className="text-xs">{item.title}</span>
      <Card>
        <LampButton
          idx={idx}
          active={activeIndexes[idx]}
          loading={loading}
          onClick={() => toggleLamp(idx)}
        />
      </Card>
    </div>
  );
};
