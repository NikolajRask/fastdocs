"use client"

import React from 'react'
import styles from './sidebar.module.scss'
import { useDocsContext } from '@/docs/context/context'

interface SidebarProps {
  titles?: string[]
}

const Sidebar = ({
  titles
}: SidebarProps) => {
  return (
    <div className={styles.sideBar}>
      {titles?.map((title, index) => {
        return (
          <SidebarItem 
            key={index}
            title={title}
          />
        )
      })}
    </div>
  )
}

export default Sidebar

interface SidebarItemProps {
  title: string,
  value?: string
}

const SidebarItem = (props: SidebarItemProps) => {

  const { setPage } = useDocsContext()
 
  return (
    <div 
      className={styles.item}
      onClick={() => {
        setPage(props.title)
      }}
    >{props.title}</div>
  )
}