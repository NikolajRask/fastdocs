"use client"

import { useDocsContext } from '@/docs/context/context';
import { SectionContextType, useSectionContext } from '@/docs/context/section';
import React, { useEffect } from 'react'
import styles from './page.module.scss'

interface PageProps {
    children: React.ReactNode
    title: string
    withTableOfContent?: boolean
}

const Page = ({
    children,
    title,
    withTableOfContent
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
      section.addTitleToSection(title ,section.sectionName, section.alwaysOpen ?? false)
    } else {
      addTitle(title);
    }
  }, []);

  return (
    <>
      {
        page == title && (
          <div 
            className={styles.pageFlex}
          >
            <div 
              className={styles.pageContent}
            >
              {children}
            </div>
            <div
              className={styles.pageTable}
            >
              <h3 className={styles.pageTableTitle}>On This Page</h3>
            </div>
          </div>
        )
      }
      
    </>
  )
}

export default Page