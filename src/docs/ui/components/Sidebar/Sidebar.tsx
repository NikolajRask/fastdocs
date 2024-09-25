"use client"

import React, { useState } from 'react'
import styles from '../components.module.scss'
import { useDocsContext } from '@/docs/context/context'
import { ArrowDownIcon, CaretDownIcon, CaretLeftIcon, CaretUpIcon } from '@radix-ui/react-icons';
import classNames from '@/docs/utils/utils';
import ActionIcon from '../core/ActionIcon/ActionIcon';
import { useMonitor } from '@/docs/utils/debug/use-monitor';
import useSettings from '@/docs/utils/settings/use-settings';

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

  const { isSidebarOpen, setIsSidebarOpen, sidebar } = useDocsContext()

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
      {
        sidebar.map((section, i) => {
          if (section.section.startsWith("_")) {
            return (
              <SidebarItem 
                key={i}
                title={section.titles[0]}
              />
            )
          } else {
            return (
            <SidebarSection key={i} name={section.section} alwaysOpen={true}>
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
          </SidebarSection>)
          }
        })
      }
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

  const { setPage, page } = useDocsContext()
 
  return (
    <div 
      className={styles.item}
      style={{
        paddingLeft: props.nested ? 40 : 30,
        color: page == props.title ? useSettings().color : "var(--text-color)"
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
          <CaretDownIcon
            className={isOpen ? styles.sectionOpen : styles.sectionClosed}
          />
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