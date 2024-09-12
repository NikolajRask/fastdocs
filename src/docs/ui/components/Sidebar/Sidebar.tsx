"use client"

import React, { useState } from 'react'
import styles from './sidebar.module.scss'
import { useDocsContext } from '@/docs/context/context'
import { ArrowDownIcon, CaretDownIcon, CaretUpIcon } from '@radix-ui/react-icons';

interface SidebarProps {
  titles?: string[];
  sections?: {
    name: string,
    titles: string[]
  }[]
}

const Sidebar = ({
  titles,
  sections
}: SidebarProps) => {
  return (
    <div className={styles.sideBar}>
      {sections?.map(section => {
        return <SidebarSection name={section.name}>
          {
            section.titles.map((title, index) => {
              return (
                <SidebarItem 
                  nested={true}
                  key={index}
                  title={title}
                />
              )
            })  
          }
        </SidebarSection>
      })}
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
  nested?: boolean;
}

const SidebarItem = (props: SidebarItemProps) => {

  const { setPage } = useDocsContext()
 
  return (
    <div 
      className={styles.item}
      style={{
        paddingLeft: props.nested ? 40 : 30
      }}
      onClick={() => {
        setPage(props.title)
      }}
    >{props.title}</div>
  )
}

interface SidebarSectionProps {
  name: string;
  children: React.ReactNode
}

const SidebarSection = (props: SidebarSectionProps) => {

  const [isOpen, setIsOpen] = useState(false)
 
  return (
    <>
      <div 
        className={styles.sectionHeader}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <span>{props.name}</span>
        {
          !isOpen ? <CaretDownIcon ></CaretDownIcon> : <CaretUpIcon ></CaretUpIcon>
        }
      </div>
      <div 
        className={styles.section}
      >
        {
          isOpen && <>
            {props.children}
          </>
        }
      </div>
    </>
  )
}