import React, { createContext, useContext, useState } from 'react';

const CityContext = createContext();


export function CityProvider({ children }) {
  const [citx, setCitx] = useState('');

  return (
    <CityContext.Provider value={{ citx, setCitx }}>
      {children}
    </CityContext.Provider>
  );
}


export function useCity() {
  const context = useContext(CityContext);
  return context;
}
