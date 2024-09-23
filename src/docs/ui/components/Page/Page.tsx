"use client"

import { useDocsContext } from '@/docs/context/context';
import { SectionContextType, useSectionContext } from '@/docs/context/section';
import React, { useEffect } from 'react'
import styles from './page.module.scss'
import { pages } from 'next/dist/build/templates/app-page';

interface PageProps {
    children: React.ReactNode
    title: string
    withTableOfContent?: boolean
}

const Page = ({
    children,
    title,
    withTableOfContent=false
}: PageProps) => {

  const { addTitle, page, setContentBarEnabled } = useDocsContext();
 
  let section: SectionContextType | undefined;

  try {
    section = useSectionContext()
  } catch(e) {
    
  }

  useEffect(() => {
    if (section?.sectionName) {
      section.addTitleToSection(title ,section.sectionName, section.alwaysOpen ?? false)
    } else {
      addTitle(title);
    }
  }, []);

  useEffect(() => {
    if (
      page == title
    ) {
      setContentBarEnabled(withTableOfContent)
    }
  }, [page])



  return (
    <>
      {
        page == title && (
          <>
            {children}
          </>
        )
      }
    </> 
  )
}

export default Page