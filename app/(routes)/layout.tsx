"use client";

import React, { useEffect, useState } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/constants/navData";
import { ref, onValue, off } from "firebase/database";
import { db } from "@/lib/firebase";
import LoadingSpinner from "@/components/LoadingSpinner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
