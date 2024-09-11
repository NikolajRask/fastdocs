"use client"

import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { useDocsContext } from '@/docs/context/context'
import styles from './docs.module.scss'

interface DocsProps {
    children: React.ReactNode
}

const Docs: React.FC<DocsProps> = ({
    children
}:DocsProps) => {

  const titles = useDocsContext().titles

  return (
    <>
        <Navbar
        />
        <Sidebar
          titles={titles}
        />
        <main className={styles.main}>
          {children}
        </main>
    </>
  )
}

export default Docs