"use client"

import React, { useState } from 'react'
import styles from './sidebar.module.scss'
import { useDocsContext } from '@/docs/context/context'
import { ArrowDownIcon, CaretDownIcon, CaretLeftIcon, CaretUpIcon } from '@radix-ui/react-icons';
import classNames from '@/docs/utils/utils';
import ActionIcon from '../core/ActionIcon/ActionIcon';
import { useMonitor } from '@/docs/utils/debug/use-monitor';

interface SidebarProps {
  titles?: string[];
  sections?: {
    name: string,
    titles: string[],
    alwaysOpen: boolean,
  }[]
}

const Sidebar = ({
  titles,
  sections
}: SidebarProps) => {

  const { isSidebarOpen, setIsSidebarOpen } = useDocsContext()

  useMonitor(isSidebarOpen)

  return (
    <div 
      className={styles.sideBar}
      style={{
        marginLeft: isSidebarOpen ? "0px" : "-351px"
      }}
    >
      <ActionIcon
        onClick={() => {
          setIsSidebarOpen(!isSidebarOpen);
        }}
        className={styles.toggleIcon}
      >
        <CaretLeftIcon/>
      </ActionIcon>
      {sections?.map((section, index) => {
        return <SidebarSection key={index} name={section.name} alwaysOpen={section.alwaysOpen}>
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
  children: React.ReactNode;
  alwaysOpen: boolean
}

const SidebarSection = (props: SidebarSectionProps) => {

  const [isOpen, setIsOpen] = useState(props.alwaysOpen)
 
  console.log(props.alwaysOpen)

  return (
    <>
      <div 
        className={classNames(styles.sectionHeader, props.alwaysOpen ? styles.noHover : styles.hover)}
        onClick={() => {
          if (!props.alwaysOpen) {
            setIsOpen(!isOpen)
          }
        }}
      >
        <span>{props.name}</span>
       {!props.alwaysOpen && <>
          {
            !isOpen ? <CaretDownIcon ></CaretDownIcon> : <CaretUpIcon ></CaretUpIcon>
          }
        </>}
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