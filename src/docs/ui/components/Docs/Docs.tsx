"use client"

import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { useDocsContext } from '@/docs/context/context'
import styles from './docs.module.scss'
import ActionIcon from '../core/ActionIcon/ActionIcon'
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons'
import useSettings from '@/docs/settings'
import Layout from '@/docs/pages/layout'

interface DocsProps {
    children: React.ReactNode
    title?: string
}

const Docs: React.FC<DocsProps> = ({
    title,
    children
}:DocsProps) => {

  const { titles, sections, setIsSidebarOpen, isSidebarOpen, changeDocsTitle } = useDocsContext()

  changeDocsTitle(title ?? useSettings("defaultDocsTitle"))

  return (
    <>
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
    </>
  )
}

export default Docs