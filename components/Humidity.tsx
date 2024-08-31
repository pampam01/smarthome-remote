"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card-component";
import { listenToFirebaseData } from "@/lib/firebase";

const HumidityVisualizer = () => {
  const [humidity, setHumidity] = useState(0);

  useEffect(() => {
    const unsubscribe = listenToFirebaseData("/humidity", (data) => {
      setHumidity(data);
    });

    return () => unsubscribe();
  }, []);

  // Function to generate droplets based on humidity level
  const generateDroplets = (): Array<{
    x: number;
    y: number;
    size: number;
  }> => {
    const droplets = [];
    const count = Math.floor(humidity * 20); // Adjust factor to control droplet density

    for (let i = 0; i < count; i++) {
      const x = Math.random() * 1000; // Range from 0% to 100%
      const y = Math.random() * 3000; // Range from 0% to 100%
      const size = Math.random() * 8 + 4; // Size between 4px and 12px

      droplets.push({ x, y, size });
    }

    return droplets;
  };

  const droplets = useMemo(generateDroplets, [humidity]);

  return (
    <Card className="aspect-square relative overflow-hidden ">
      <div className="absolute top-0 left-0 p-4">
        <span className="text-3xl font-bold text-white">
          Kelembapan: {humidity.toFixed(2)}%
        </span>
      </div>
      {droplets.map((droplet, index) => (
        <motion.div
          key={index}
          className="absolute bg-white rounded-full"
          style={{
            width: `${droplet.size}px`,
            height: `${droplet.size}px`,
            left: `${droplet.x}%`,
            top: `${droplet.y}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}
    </Card>
  );
};

export default HumidityVisualizer;
