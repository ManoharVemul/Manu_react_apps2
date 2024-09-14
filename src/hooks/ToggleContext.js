
// ToggleContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a Context with default value
const ToggleContext = createContext();

// Create a provider component
export const ToggleProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);

  // Function to toggle the state
  const toggle = () => setIsToggled(prev => !prev);

  return (
    <ToggleContext.Provider value={{ isToggled, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

// Custom hook to use the ToggleContext
export const useToggle = () => useContext(ToggleContext);
