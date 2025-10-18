"use client";

import { createContext, useState, useContext } from "react";

const SideContext = createContext();

export function SideProvider({ children }) {
  const [isSideOpen, setIsSideOpen] = useState(false);

  const toggleMenu = () => {
    setIsSideOpen((prev) => !prev);
  };

  return (
    <SideContext.Provider value={{ isSideOpen, toggleMenu }}>
      {children}
    </SideContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SideContext);
}
