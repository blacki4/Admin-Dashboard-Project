"use client";

import { createContext, useContext, useState } from "react";
import { rows as initialRows } from "../app/manage-team/data";

const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [rows, setRows] = useState(initialRows);

  return (
    <TeamContext.Provider value={{ rows, setRows }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error("useTeam must be used within a TeamProvider");
  }
  return context;
};
