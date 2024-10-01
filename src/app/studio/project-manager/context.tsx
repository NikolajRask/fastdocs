import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context value
interface ProjectManagerContextType {
  name: string;
  setName: (name: string) => void;
}

// Create the context with a default value (null for now)
const ProjectManagerContext = createContext<ProjectManagerContextType | undefined>(undefined);

// Create a custom hook to easily use the context
export const useProjectManager = (): ProjectManagerContextType => {
  const context = useContext(ProjectManagerContext);
  if (!context) {
    throw new Error('useProjectManager must be used within a UserProvider');
  }
  return context;
};

// Create the provider component
interface ProjectManagerProviderProps {
  children: ReactNode;
}

export const ProjectManageProvider: React.FC<ProjectManagerProviderProps> = ({ children }) => {
  const [name, setName] = useState("")

  return (
    <ProjectManagerContext.Provider value={{ name, setName }}>
      {children}
    </ProjectManagerContext.Provider>
  );
};