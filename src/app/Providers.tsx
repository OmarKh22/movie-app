"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

type providerType ={
  children : ReactNode
}

const Providers = ({ children } : providerType) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-dark dark:text-white dark:bg-gray-700 min-h-screen select-none transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
