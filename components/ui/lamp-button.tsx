"use client";
import { Button } from "./button";
import Image from "next/image";

interface LampButtonProps {
  idx: number;
  active: boolean;
  loading: boolean;
  onClick: () => void;
}

export const LampButton = ({
  idx,
  active,
  loading,
  onClick,
}: LampButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={loading}
      variant={"ghost"}
      className="w-[200px] h-[300px] flex justify-center items-center"
    >
      <Image
        src={active ? "/bulb_on.jpg" : "/bulb_off.jpg"}
        alt={`Lamp ${idx + 1}`}
        fill
      />
    </Button>
  );
};
