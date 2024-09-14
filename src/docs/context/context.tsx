"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';
import useSettings from '../settings';

// Define the type for the context
interface DocsContextType {
  titles: string[];
  addTitle: (title: string) => void;
  page: string;
  setPage: (page: string) => void;
  sections: {
    name: string;
    titles: string[];
    alwaysOpen: boolean;
  }[],
  addTitleToSection: (title: string, section: string, alwaysOpen: boolean) => void
  search: (input: string) => string[]
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
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
  const [sections, setSections] = useState<{
    name: string,
    titles: string[],
    alwaysOpen: boolean
  }[]>([])
  const [currentPage, setCurrentPage] = useState<string>(useSettings("defaultPage"))
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)



  const addTitle = (title: string) => {
    setTitles((prev) => {
      if (prev.includes(title)) {
        return prev
      } else {
        return [...prev, title]
      }
    });
  };

  const search = (input: string) => {
    let allTitles = sections.map(section => {
      return section.titles
    })

    allTitles = allTitles.concat(titles)

    return allTitles.flatMap((at) => {
      return at
    }).filter(f => f.includes(input))
  }

  const addTitleToSection = (title: string, section: string, alwaysOpen: boolean) => {
    setSections((prevSections) => {
      // Check if the section already exists
      const sectionExists = prevSections.find((s) => s.name === section);
  
      if (sectionExists) {
        // If section exists, map over sections and update the corresponding one
        if (!sectionExists.titles.includes(title)) {
          return prevSections.map((s) =>
            s.name === section
              ? { ...s, titles: [...s.titles, title], alwaysOpen: alwaysOpen }
              : s
          );
        } else {
          return [...prevSections];
        }
      } else {
        // If section does not exist, add a new section
        return [...prevSections, { name: section, titles: [title], alwaysOpen: alwaysOpen }];
      }
    });
  };

  const setPage = (page: string) => {
    setCurrentPage(page)
  }

  return (
    <DocsContext.Provider value={{ titles, addTitle, page: currentPage, setPage, sections, addTitleToSection, search, isSidebarOpen, setIsSidebarOpen }}>
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

