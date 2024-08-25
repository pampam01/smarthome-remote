import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center ">
      <motion.div
        className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
