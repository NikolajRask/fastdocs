"use client"

import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { useDocsContext } from '@/docs/context/context'
import styles from './docs.module.scss'
import ActionIcon from '../core/ActionIcon/ActionIcon'
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons'

interface DocsProps {
    children: React.ReactNode
}

const Docs: React.FC<DocsProps> = ({
    children
}:DocsProps) => {

  const { titles, sections, setIsSidebarOpen, isSidebarOpen } = useDocsContext()

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
        <main className={styles.main}>
          {children}
        </main>
    </>
  )
}

export default Docs