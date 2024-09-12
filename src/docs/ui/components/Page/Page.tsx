"use client"

import { useDocsContext } from '@/docs/context/context';
import { SectionContextType, useSectionContext } from '@/docs/context/section';
import React, { useEffect } from 'react'

interface PageProps {
    children: React.ReactNode
    title: string
}

const Page = ({
    children,
    title
}: PageProps) => {

  const { addTitle, page } = useDocsContext();
 
  let section: SectionContextType | undefined;

  try {
    section = useSectionContext()
  } catch (error) {
    console.log(error)
  }

  useEffect(() => {
    if (section?.sectionName) {
      section.addTitleToSection(title ,section.sectionName)
    } else {
      addTitle(title);
    }
  }, []);

  return (
    <>
      {
        page == title && (
          children
        )
      }
      
    </>
  )
}

export default Page