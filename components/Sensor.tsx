"use client";

import React, { useEffect, useState } from "react";
import { Card, CardDescription, CardTitle } from "./ui/card-component";
import { listenToFirebaseData } from "@/lib/firebase";
import LottieAnimation from "./LottieAnimation";

interface SensorProps {
  title: string;
  endpoint: string;
  lottieUrl: string;
}

const Sensor = ({ title, endpoint, lottieUrl }: SensorProps) => {
  const [isStatus, setIsStatus] = useState(false);

  useEffect(() => {
    try {
      const unsubscribe = listenToFirebaseData(`/${endpoint}`, (data) => {
        setIsStatus(data);
      });

      // Cleanup the listener on component unmount
      return () => unsubscribe();
    } catch (error) {
      console.error("Error listening to Firebase data:", error);
    }
  }, []);

  return (
    <Card className="aspect-square">
      <CardTitle>{title}</CardTitle>
      <CardDescription>
        {isStatus ? `${title} Hidup` : `${title} mati`}
      </CardDescription>
      {isStatus && <LottieAnimation lottieUrl={lottieUrl} />}
    </Card>
  );
};

export default Sensor;
