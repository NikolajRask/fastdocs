"use client"

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import useSettings from '../utils/settings/use-settings';
import { fuzzyFilter } from '../utils/search/search';

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
  allTitles: () => string[];
  getFirstPageInSection: (v: string) => string | undefined;
  isLoading: boolean;
  contentBarEnabled: boolean;
  setContentBarEnabled: React.Dispatch<React.SetStateAction<boolean>>
  contentOnPage: {
    label: string,
    id: string,
  }[]
  setContentOnPage: React.Dispatch<React.SetStateAction<{
    label: string,
    id: string,
  }[]>>
  addTitleToContent: (v: string, id: string) => void;
  sidebar: ({
    section: string;
    titles: string[];
  })[];
  setSidebar: React.Dispatch<React.SetStateAction<({
    section: string;
    titles: string[];
  })[]>>;
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
  const [currentPage, setCurrentPage] = useState<string>(useSettings().defaultPage)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [docsTitle, setDocsTitle] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const [contentBarEnabled, setContentBarEnabled] = useState(false)
  const [contentOnPage, setContentOnPage] = useState<{
    label: string,
    id: string
  }[]>([])
  const [sidebar, setSidebar] = useState<(
    {
      section: string,
      titles: string[]
    }
  )[]>([])

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

  const allTitles = () => {
    let allTitles = sections.map(section => {
      return section.titles
    })

    allTitles = allTitles.concat(titles)

    return allTitles.flatMap((at) => {
      return at
    })
  }

  const search = (input: string) => {
    let allTitles = sections.map(section => {
      return section.titles
    })

    allTitles = allTitles.concat(titles)

    return fuzzyFilter(input, 
      allTitles.flatMap((at) => {
        return at
      })
    )
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

  function getFirstPageInSection (name: string): string | undefined {
    return sections.find(section => section.name == name)?.titles[0]
  }

  function addTitleToContent(title: string, id: string) {
    setContentOnPage((prev) => {
      return [
        ...prev,
        {
          label: title,
          id: id
        }
      ]
    })
  }

  const setPage = (page: string) => {
    setCurrentPage(page)
    window.history.replaceState(null, '', window.location.pathname + '?page='+page);
  }


  useEffect(() => {
    window.setTimeout(() => {
      setIsLoading(false)
    }, useSettings().loadingTime)
  }, [])
  return (
    <DocsContext.Provider value={{ titles, addTitle, page: currentPage, setPage, sections, addTitleToSection, search, isSidebarOpen, setIsSidebarOpen, docsTitle, changeDocsTitle, getPageSection, getNeighbourPage, allTitles, getFirstPageInSection, isLoading, contentBarEnabled, setContentBarEnabled, contentOnPage, setContentOnPage, addTitleToContent, sidebar, setSidebar }}>
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

