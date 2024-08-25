<!-- ini bagian utama untuk memanggil button dan lampu  -->



<!-- "use client";

import { Button } from "@/components/ui/button";
import { database } from "@/lib/firebase";
import { ref, onValue, set } from "firebase/database";
import { useEffect, useState } from "react";

const Home = () => {
  const [ledStatus, setLedStatus] = useState(false);
  const [distance, setDistance] = useState(0);
  const [ledStatus2, setledStatus2] = useState(false);

  useEffect(() => {
    const ledStatus = ref(database, "ledStatus");
    onValue(ledStatus, (snapshot) => {
      const status = snapshot.val();

      setLedStatus(status);
    });

    const distanceStatus = ref(database, "distance");
    onValue(distanceStatus, (snapshot) => {
      const status = snapshot.val();

      setDistance(status);

      // Jika jarak kurang dari 30 cm, matikan LED
    });

    const ledStatus2 = ref(database, "ledStatus2");
    onValue(ledStatus2, (snapshot) => {
      const status = snapshot.val();
      setledStatus2(status);
    });
  }, []);

  const toggleLed = () => {
    set(ref(database, "ledStatus"), !ledStatus);
  };
  return (
    <div className="flex flex-col mx-auto justify-center items-center min-h-screen">
      <div className="flex gap-20 items-center justify-center  ">
        <div>
          <h1 className="text-3xl font-bold mb-4">
            LED is {ledStatus ? "ON" : "OFF"}
          </h1>
          <Button
            onClick={toggleLed}
            variant={ledStatus ? "destructive" : "default"}
          >
            Turn LED {ledStatus ? "OFF" : "ON"}
          </Button>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{distance}</h1>
          <h1 className="text-3xl font-bold mb-4">
            LED2 is {ledStatus2 ? "ON" : "OFF"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home; -->
