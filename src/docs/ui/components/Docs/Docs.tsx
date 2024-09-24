"use client"

import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { useDocsContext } from '@/docs/context/context'
import styles from '../components.module.scss'
import ActionIcon from '../core/ActionIcon/ActionIcon'
import { CaretRightIcon } from '@radix-ui/react-icons'
import Layout from '@/docs/pages/layout'
import { useSearchParams } from 'next/navigation'
import Loading from '../Loading/Loading'
import useSettings from '@/docs/utils/settings/use-settings'
import { useTheme } from '@/docs/utils/use-theme'

interface DocsProps {
    children: React.ReactNode
    title?: string
}

const Docs: React.FC<DocsProps> = ({
    title,
    children
}:DocsProps) => {

  const { titles, sections, setIsSidebarOpen, isSidebarOpen, changeDocsTitle, setPage, isLoading, contentBarEnabled, contentOnPage, setContentOnPage, page } = useDocsContext()

  const searchParams = useSearchParams(); // This will capture 'Get Started'

  useTheme()

  useEffect(() => {
    const pageParam = searchParams.get('page'); // Get the `page` query parameter
    if (pageParam) {
      changeDocsTitle(title ?? useSettings().defaultDocsTitle)
      setPage(pageParam)

    }
  }, [searchParams]); // Re-run effect when searchParams change

  useEffect(() => {
    setContentOnPage([])
  }, [page, contentBarEnabled])


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
              className={styles.toggleIconDocs}
            >
              <CaretRightIcon/>
            </ActionIcon>
            {
              contentBarEnabled ? (
                <div className={styles.mainFlex}>
                  <main 
                    className={styles.main}
                    style={{
                      marginLeft: isSidebarOpen ? "351px" : "0px",
                      width: isSidebarOpen ? "calc(100vw - 701px)" : "calc(100vw - 350px)"
                    }}
                  >   
                    <Layout>
                      {children}
                    </Layout>
                  </main>
                  <div className={styles.tableOfContents}>
                    <h2>Content On This Page</h2>
                    {contentOnPage.map((contentTitle, index) => {
                      return <a href={`#content-${contentTitle.label}`}>
                        <p 
                          key={index}
                          style={{
                            marginBottom: 5,
                          }}
                        >
                          {contentTitle.label}
                        </p>
                      </a>
                    })}
                  </div>
                </div>
              ) : (
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
              )
            }  
        </div>
      )}
    </>
  )
}

export default Docs