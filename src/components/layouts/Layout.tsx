import React from "react";
import { Navigation, Bottom } from ".";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Bottom />
    </>
  )
}
