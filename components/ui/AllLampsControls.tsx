import { Button } from "./button";

const AllLampControls = ({
  toggleAllLamps,
  loading,
  allLampsOn,
  allLampsOff,
}: {
  toggleAllLamps: (state: boolean) => void;
  loading: boolean;
  allLampsOn: boolean;
  allLampsOff: boolean;
}) => (
  <div className="flex justify-center space-x-4 mb-6">
    <Button
      onClick={() => toggleAllLamps(true)}
      disabled={loading || allLampsOn}
      variant={allLampsOn ? "default" : "outline"}
    >
      Turn All On
    </Button>
    <Button
      onClick={() => toggleAllLamps(false)}
      disabled={loading || allLampsOff}
      variant={allLampsOff ? "default" : "outline"}
    >
      Turn All Off
    </Button>
  </div>
);

export default AllLampControls;
