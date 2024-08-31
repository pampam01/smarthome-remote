"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Card } from "./ui/card-component";
import { listenToFirebaseData } from "@/lib/firebase";

const Thermometer = dynamic(
  () =>
    import("react-thermometer-ecotropy").then((mod) => {
      const Thermometer = mod.default; // Simpan komponen dalam variabel
      if (!Thermometer) {
        throw new Error("Thermometer component is undefined"); // Tambahkan pengecekan untuk undefined
      }
      return Thermometer as React.ComponentType<{
        theme: string;
        value: number;
        max: number;
        steps: number;
        format: string;
        size: string;
        height: number;
        className?: string;
      }>; // Casting setelah pengecekan
    }),
  { ssr: false }
);

const ThermometerComponent = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const unsubscribe = listenToFirebaseData("/temperature", (data) => {
      setTemp(data);
    });

    return () => unsubscribe();
  }, []);
  return (
    <Card className="aspect-square">
      <div className=" flex justify-center items-center pt-4 md:pt-10">
        {isMounted && (
          <Thermometer
            theme="dark"
            value={temp}
            max={100}
            steps={5}
            format="°C"
            size="large"
            height={275}
            className="py-4"
          />
        )}
      </div>
    </Card>
  );
};

export default ThermometerComponent;
