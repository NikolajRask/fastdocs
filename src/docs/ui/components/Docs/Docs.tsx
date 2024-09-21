"use client"

import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { useDocsContext } from '@/docs/context/context'
import styles from '../components.module.scss'
import ActionIcon from '../core/ActionIcon/ActionIcon'
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons'
import Layout from '@/docs/pages/layout'
import { useRouter, useSearchParams } from 'next/navigation'
import MissingPage from '../404/404'
import Loading from '../Loading/Loading'
import useSettings from '@/docs/utils/settings/use-settings'

interface DocsProps {
    children: React.ReactNode
    title?: string
}

const Docs: React.FC<DocsProps> = ({
    title,
    children
}:DocsProps) => {

  const { titles, sections, setIsSidebarOpen, isSidebarOpen, changeDocsTitle, setPage, isLoading } = useDocsContext()

  const searchParams = useSearchParams(); // This will capture 'Get Started'

  useEffect(() => {
    const pageParam = searchParams.get('page'); // Get the `page` query parameter
    if (pageParam) {
      changeDocsTitle(title ?? useSettings().defaultDocsTitle)
      setPage(pageParam)

    }
  }, [searchParams]); // Re-run effect when searchParams change

  console.log(titles)
  console.log(sections)

  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (
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
              <Layout>
                {children}
              </Layout>
            </main>
        </div>
      )}
    </>
  )
}

export default Docs