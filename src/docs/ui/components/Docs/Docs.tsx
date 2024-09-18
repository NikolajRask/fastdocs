"use client"

import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { useDocsContext } from '@/docs/context/context'
import styles from './docs.module.scss'
import ActionIcon from '../core/ActionIcon/ActionIcon'
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons'
import useSettings from '@/docs/settings'
import Layout from '@/docs/pages/layout'
import { useRouter, useSearchParams } from 'next/navigation'
import MissingPage from '../404/404'

interface DocsProps {
    children: React.ReactNode
    title?: string
}

const Docs: React.FC<DocsProps> = ({
    title,
    children
}:DocsProps) => {

  const { titles, sections, setIsSidebarOpen, isSidebarOpen, changeDocsTitle, setPage, allTitles } = useDocsContext()

  const searchParams = useSearchParams();
  const page = searchParams.get('page'); // This will capture 'Get Started'

  useEffect(() => {
    changeDocsTitle(title ?? useSettings("defaultDocsTitle"))
    setPage(page ?? useSettings().defaultPage)
  }, [])

  return (
    <div
      style={{
        overflow: "hidden",
        overflowY: "hidden",
        height: "100vh"
      }}
    >
        <Navbar
        />     
        <Sidebar
          titles={titles}
          sections={sections}
        />
        <ActionIcon
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
          className={styles.toggleIcon}
        >
          <CaretRightIcon/>
        </ActionIcon>  
        <main 
          className={styles.main}
          style={{
            marginLeft: isSidebarOpen ? "351px" : "0px",
            width: isSidebarOpen ? "calc(100vw - 351px)" : "100vw"
          }}
        >   
          {allTitles().includes(page ?? "") ? (
            <Layout>
              {children}
              </Layout>
          ) : (
            <MissingPage/>
          )}
        </main>
    </div>
  )
}

export default Docs