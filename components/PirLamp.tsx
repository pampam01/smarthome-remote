"use client";

import { listenToFirebaseData } from "@/lib/firebase";
import { useEffect, useState } from "react";
import { Card } from "./ui/card-component";
import Image from "next/image";

const PirLamp = () => {
  const [pir, setPir] = useState(false);

  useEffect(() => {
    try {
      const unsubscribe = listenToFirebaseData("/pirLampStatus", (data) => {
        setPir(data);
      });

      return () => unsubscribe();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Card className="aspect-square ">
      <div className="w-[200px] h-[300px] flex justify-center items-center">
        <Image src={pir ? "/bulb_on.jpg" : "/bulb_off.jpg"} alt="pir" fill />
      </div>
    </Card>
  );
};

export default PirLamp;
