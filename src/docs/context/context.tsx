"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the context
interface DocsContextType {
  titles: string[];
  addTitle: (title: string) => void;
  page: string;
  setPage: (page: string) => void
 }

// Create the context with a default value
const DocsContext = createContext<DocsContextType | undefined>(undefined);

// Define the type for the provider props
interface DocsProviderProps {
  children: ReactNode;
}

// Provider component
export const DocsProvider: React.FC<DocsProviderProps> = ({ children }) => {
  const [titles, setTitles] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<string>("default")

  const addTitle = (title: string) => {
    setTitles((prev) => {
      if (prev.includes(title)) {
        return prev
      } else {
        return [...prev, title]
      }
    });
  };

  const setPage = (page: string) => {
    setCurrentPage(page)
  }

  return (
    <DocsContext.Provider value={{ titles, addTitle, page: currentPage, setPage }}>
      {children}
    </DocsContext.Provider>
  );
};

// Hook to access the context
export const useDocsContext = (): DocsContextType => {
  const context = useContext(DocsContext);
  if (!context) {
    throw new Error('DocsTitle must be used within a PageTitleProvider');
  }
  return context;
};

