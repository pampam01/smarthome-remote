import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/constants/navData";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <div>{children}</div>
    </div>
  );
};

export default layout;
