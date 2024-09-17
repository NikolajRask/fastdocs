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
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>,
  docsTitle: string,
  changeDocsTitle: (v: string) => void,
  getPageSection: (v: string) => string | undefined
  getNeighbourPage: (v: string) => {
    previous: string | null,
    next: string | null
  }
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
  const [docsTitle, setDocsTitle] = useState<string>("")

  const changeDocsTitle = (v: string) => {
    setDocsTitle(v)
  }

  const addTitle = (title: string) => {
    setTitles((prev) => {
      if (prev.includes(title)) {
        return prev
      } else {
        return [...prev, title]
      }
    });
  };

  function getNeighbourPage(page: string) {

    let allTitles = sections.map(section => {
      return section.titles
    })

    allTitles = allTitles.concat(titles)

    let arr = allTitles.flatMap((at) => at)

    const index = arr.indexOf(page);
  
    // If target not found, return null neighbors
    if (index === -1) {
      return { previous: null, next: null };
    }
  
    // Find previous and next neighbors
    const previous = index > 0 ? arr[index - 1] : null;
    const next = index < arr.length - 1 ? arr[index + 1] : null;
  
    return {
      previous: previous,
      next: next
    };
  }

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

  function getPageSection (page: string): string | undefined {
    return sections.find(section => section.titles.includes(page))?.name
  }

  const setPage = (page: string) => {
    setCurrentPage(page)
    window.history.replaceState(null, '', window.location.pathname + '?page='+page);
  }

  return (
    <DocsContext.Provider value={{ titles, addTitle, page: currentPage, setPage, sections, addTitleToSection, search, isSidebarOpen, setIsSidebarOpen, docsTitle, changeDocsTitle, getPageSection, getNeighbourPage }}>
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

