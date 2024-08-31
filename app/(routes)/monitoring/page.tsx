import HumidityVisualizer from "@/components/Humidity";
import Sensor from "@/components/Sensor";
import ThermometerComponent from "@/components/Thermometer";
import { sensorData } from "@/constants/sensor-data";
import React from "react";

const MonitoringPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full gap-4">
        {sensorData.map((sensor) => (
          <Sensor
            key={sensor.id}
            title={sensor.title}
            endpoint={sensor.endpoint}
            lottieUrl={sensor.lottieUrl}
          />
        ))}
        <HumidityVisualizer />
        <ThermometerComponent />
      </div>
    </div>
  );
};

export default MonitoringPage;
