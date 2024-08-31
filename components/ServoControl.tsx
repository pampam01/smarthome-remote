"use client";

import { getFirebaseData, setFirebaseData } from "@/lib/firebase";
import React, { useEffect, useState } from "react";
import { Card } from "./ui/card-component";
import { Button } from "./ui/button";
import Image from "next/image";

const ServoControl = () => {
  const [servoPosition, setServoPosition] = useState(0);

  const handleServo = async () => {
    const newPosition = servoPosition === 0 ? 90 : 0;

    await setFirebaseData("/servoPosition", newPosition);
    setServoPosition(newPosition);
  };

  return (
    <Card className="my-4 aspect-square flex justify-center items-center">
      <Button
        onClick={handleServo}
        variant={"ghost"}
        className="w-[200px] h-[300px] flex justify-center items-center overflow-hidden"
      >
        <Image
          src={servoPosition === 0 ? "/door_close.png" : "/door_openn.png"}
          alt="Door"
          fill
          className="object-cover"
        />
      </Button>
    </Card>
  );
};

export default ServoControl;
