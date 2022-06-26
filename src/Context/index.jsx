import React, { createContext } from "react";

export const Pizza = createContext();

export const Context = ({ children }) => {
  return <Pizza.Provider>{children}</Pizza.Provider>;
};

export default Context;
