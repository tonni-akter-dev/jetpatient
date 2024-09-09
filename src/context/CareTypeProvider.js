'use client'
import React, { createContext, useState, useContext } from 'react';

// Step 1: Create a context
const CareTypeContext = createContext();

// Step 2: Create a provider
export const CareTypeProvider = ({ children }) => {
  const [selectedCareType, setSelectedCareType] = useState(null);

  return (
    <CareTypeContext.Provider value={{ selectedCareType, setSelectedCareType }}>
      {children}
    </CareTypeContext.Provider>
  );
};

// Step 3: Create a hook to consume the context
export const useCareType = () => {
  const context = useContext(CareTypeContext);
  if (!context) {
    throw new Error('useCareType must be used within a CareTypeProvider');
  }
  return context;
};
