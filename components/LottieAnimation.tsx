"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import LoadingSpinner from "./LoadingSpinner";
import { div } from "three/webgpu";

// Dynamically import Lottie component with no SSR
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const LottieAnimation = ({ lottieUrl }: { lottieUrl: string }) => {
  const [animationData, setAnimationData] = useState<string | null>(null);
  //   const lottieUrl =
  //     "https://lottie.host/5a371caf-4d68-433f-95fa-d556d678e79f/XXZQ7UC0rf.json";

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch(lottieUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch Lottie animation data");
        }
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error loading Lottie animation:", error);
      }
    };

    fetchAnimationData();
  }, []);

  if (!animationData) {
    return (
      <div className="w-full h-full mb-4 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div className=" w-full h-full mb-4">
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
};

export default LottieAnimation;
