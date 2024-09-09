'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

const SelectedProcedureContext = createContext();

const SelectedProcedureProvider = ({ children }) => {
  const [selectedProcedure, setSelectedProcedure] = useState({ name: "", id: "" });

  const handleSetSelectedProcedure = (procedure) => {
    setSelectedProcedure(procedure);
  };

  return (
    <SelectedProcedureContext.Provider value={{ selectedProcedure, setSelectedProcedure: handleSetSelectedProcedure }}>
      {children}
    </SelectedProcedureContext.Provider>
  );
};

const useSelectedProcedure = () => {
  const context = useContext(SelectedProcedureContext);
  if (!context) {
    throw new Error('useSelectedProcedure must be used within a SelectedProcedureProvider');
  }
  return context;
};

export { SelectedProcedureProvider, useSelectedProcedure };
