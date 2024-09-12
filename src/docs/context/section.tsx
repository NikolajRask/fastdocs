"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useDocsContext } from './context';

// Define the type for the context
export interface SectionContextType {
  sections: {
    name: string,
    titles: string[]
  }[],
  addTitleToSection: (title: string, section: string) => void;
  sectionName: string;
}

// Create the context with a default value
const SectionContext = createContext<SectionContextType | undefined>(undefined);

// Define the type for the provider props
interface SectionProviderProps {
  children: ReactNode;
  name: string;
}

// Provider component
export const SectionProvider: React.FC<SectionProviderProps> = ({ children, name }) => {

    const higherContext = useDocsContext()

    return (
        <SectionContext.Provider value={{ sections: higherContext.sections, addTitleToSection: higherContext.addTitleToSection, sectionName: name }}>
        {children}
        </SectionContext.Provider>
    );
};

// Hook to access the context
export const useSectionContext = (): SectionContextType => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('SectionTitle must be used within a PageTitleProvider');
  }
  return context;
};

