import { HoverEffect } from "@/components/ui/card-hover-effect";
import { projects } from "@/constants/buttonData";

const CardsLamp = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
};

export default CardsLamp;
