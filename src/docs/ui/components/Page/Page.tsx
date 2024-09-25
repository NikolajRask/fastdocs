"use client"

import { useDocsContext } from '@/docs/context/context';
import { SectionContextType, useSectionContext } from '@/docs/context/section';
import React, { useEffect } from 'react'
import { pages } from 'next/dist/build/templates/app-page';
import { cuid } from '@/docs/utils/utils';

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

  const { addTitle, page, setContentBarEnabled, setSidebar, sidebar } = useDocsContext();
 
  let section: SectionContextType | undefined;

  try {
    section = useSectionContext()
  } catch(e) {
    
  }

  useEffect(() => {
    if (section?.sectionName) {
      section.addTitleToSection(title ,section.sectionName, section.alwaysOpen ?? false)
      setSidebar((prev) => {
        return [
          ...prev.filter((x) => x.section != section.sectionName),
          {
            section: section.sectionName,
            titles: Array.from(new Set([...prev.find(x => x.section == section.sectionName)?.titles ?? [], title].flat()))
          }
        ]
      })
    } else {
      setSidebar((prev) => {
        if (prev.find((x) => x.section.startsWith("_") && x.titles.includes(title)) == undefined) {
          return [...prev, {
            section: `_${cuid()}`,
            titles: [title]
          }]
        } else {
          return [...prev.filter((x) => !x.titles.includes(title)), {
            section: `_${cuid()}`,
            titles: [title]
          }]
        }
      })
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