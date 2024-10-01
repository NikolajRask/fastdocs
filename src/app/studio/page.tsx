"use client"

import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Markdown } from './utils/translator'
import { CaretLeftIcon, QuestionMarkIcon } from '@radix-ui/react-icons'
import Modal from '@/docs/ui/components/custom/Modal/Modal'
import { a11yDark, a11yLight, atomOneDark, atomOneLight, CodeBlock, github, irBlack, obsidian, paraisoDark, pojoaque, xt256 } from 'react-code-blocks'
import useSettings from '@/docs/utils/settings/use-settings'
import { BoxIcon, DnaIcon, HomeIcon, MenuIcon } from 'lucide-react'
import ProjectManager, { DataType } from './project-manager/ProjectManager'
import { Highlight } from '@/docs/ui/components/core'
import { ProjectManageProvider } from './project-manager/context'
import { useMemory } from './project-manager/hooks/useMemory'
import { useTheme } from '@/docs/utils/use-theme'
import ThemePicker from '@/docs/ui/components/custom/theme-picker/ThemePicker'

const StudioPage = () => {

    const [result, setResult] = useState(<></>)
    const [isHelpModalOpen, setIsHelpModalOpen] = useState(false)
    const [pageState, setPageState] = useState("preview")
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [currentMarkdown, setCurrentMarkdown] = useState("")
    const [currentPage, setCurrentPage] = useState(useMemory("currentPage"))

    const theme = useTheme()

    useEffect(() => { // Fetch saved changes
        let lookup = useMemory("projects") as DataType[]

        let currentProject = lookup.find((x) => x.pages.map((page) => page.id).includes(currentPage))

        let pageContent = currentProject?.pages.find((x) => x.id == currentPage)


        if (pageContent != undefined) {
            setCurrentMarkdown(pageContent.content)
            setResult(Markdown(pageContent.content))
        }

    }, [currentPage])

    function saveProgress(markdown: string) {
        let projects = useMemory("projects") as DataType[]

        let currentProjectIndex = projects.findIndex((x) => x.pages.map((page) => page.id).includes(currentPage))

        if (currentProjectIndex != -1) {
            let copyCurrentProject = projects[currentProjectIndex]
    
            let currentPageIndex = copyCurrentProject.pages.findIndex((x) => x.id == currentPage)

            if (currentPageIndex != -1) {
                let copyCurrentPage = copyCurrentProject.pages[currentPageIndex]
    
                copyCurrentPage.content = markdown
        
                copyCurrentProject.pages[currentPageIndex] = copyCurrentPage
        
                projects[currentProjectIndex] = copyCurrentProject
        
                useMemory("projects", projects)
            }

        }
    }

    const darkTheme = a11yDark
    darkTheme.backgroundColor = "#121212"

    return (
        <>
            <Modal
                isOpen={isHelpModalOpen}
                onClose={() => {
                    setIsHelpModalOpen(false)
                }}
                style={{
                    border: "1px solid var(--border-color)",
                    background: "var(--background-color)",
                    width: 560,
                    height: 350,
                    borderRadius: 20,
                    color: "var(--text-color)"
                }}
            >
                <p className={styles.markdownGuideTitle}>
                    Markdown Guide
                </p>
                <div className={styles.markdownGuideWrapper}>
                    <div className={styles.markdownGuide}>
                        <Highlight>#</Highlight>
                        <p>Use # with a space in the begginging of a line to make a header</p>
                    </div>
                    <div className={styles.markdownGuide}>
                        <Highlight>##</Highlight>
                        <p>Use ## with a space in the begginging of a line to make a title</p>
                    </div>
                    <div className={styles.markdownGuide}>
                        <Highlight>{">"}</Highlight>
                        <p>Use {">"} with a space in the begginging of a line to make a blockquote</p>
                    </div>
                    <div className={styles.markdownGuide}>
                        <Highlight>*italic*</Highlight>
                        <p>Use ** around text to make it italic</p>
                    </div>
                    <div className={styles.markdownGuide}>
                        <Highlight>**bold**</Highlight>
                        <p>Use **** around text to make it bold</p>
                    </div>
                    <div className={styles.markdownGuide}>
                        <Highlight>`code`</Highlight>
                        <p>Use `` around text to make it code</p>
                    </div>
                    <div className={styles.markdownGuide}>
                        <Highlight>/terminal/</Highlight>
                        <p>Use // around text to make it a terminal view</p>
                    </div>
                    <div className={styles.markdownGuide}>
                        <Highlight>%Highligt%</Highlight>
                        <p>Use %% around text to highlight it</p>
                    </div>
                    <div className={styles.markdownGuide}>
                        <Highlight>{"[Link Text](url)"}</Highlight>
                        <p>Use [Links Text](url) to make a link</p>
                    </div>
                    <div className={styles.markdownGuide}>
                        <Highlight>{"![Alt Text](image url)"}</Highlight>
                        <p>Use ![Alt Text](image url) to make an image</p>
                    </div>
                </div>
            </Modal>
            <div 
                className={styles.studioMenu}
                style={{
                    marginLeft: isMenuOpen ? "0px" : "-301px"
                }}
            >
                <CaretLeftIcon
                    className={styles.closeMenuIcon}
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen)
                    }}
                />
                <a href={"/"}>
                    <div className={styles.menuLink}>
                        <HomeIcon/>
                        <span>Home</span>
                    </div>
                </a>
                <a href={"/docs"}>
                    <div className={styles.menuLink}>
                        <BoxIcon/>
                        <span>Docs</span>
                    </div>
                </a>
                <a href={"/support"}>
                    <div className={styles.menuLink}>
                        <DnaIcon/>
                        <span>Support</span>
                    </div>
                </a>
                <ProjectManager 
                    currentMarkdown={currentMarkdown} 
                    setCurrentMarkdown={setCurrentMarkdown} 
                    currentPage={currentPage} 
                    setCurrentPage={setCurrentPage}                    
                />
            </div>
            <div className={styles.studioContainer}>
                <div className={styles.studioNav}>
                    <div className={styles.studioNavMenu}>
                        <MenuIcon
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen)
                            }}
                        />
                        <h1
                            className={styles.logo}
                        >
                            <a>F</a>astdocs Studio
                        </h1>
                    </div>
                    <div className={styles.tabs}>
                        <div
                            style={{
                                marginLeft: 20,
                                marginRight: 20,
                                marginTop: 4,
                            }}
                        >
                            <ThemePicker/>
                        </div>
                        <div 
                            className={styles.tab}
                            onClick={() => {
                                setPageState("preview")
                            }}
                            style={{
                                color: pageState == "preview" ? useSettings().color : "var(--text-color)"
                            }}
                        >Preview</div>
                        <div 
                            className={styles.tab}
                            onClick={() => {
                                setPageState("code")
                            }}
                            style={{
                                color: pageState == "code" ? useSettings().color : "var(--text-color)"
                            }}
                        >Code</div>
                    </div>
                </div>
                <div className={styles.studioContentContainer}>
                    <div className={styles.studioEditorWrapper}>
                        <div 
                            className={styles.help}
                            onClick={() => {
                                setIsHelpModalOpen(true)
                            }}
                        >
                            <QuestionMarkIcon/>
                        </div>
                        <textarea 
                            onKeyDown={(e) => {
                                if (e.key == "Tab") {
                                    e.preventDefault()
                                    e.stopPropagation()
                                }
                            }}
                            className={styles.studioEditor}
                            onChange={(e) => {
                                setResult(Markdown(e.target.value))
                                setCurrentMarkdown(e.target.value)
                                saveProgress(e.target.value)
                            }}
                            placeholder={"Write markdown here"}
                            value={currentMarkdown}
                        >
                        </textarea>
                    </div>
                    {
                        pageState == "preview" && (
                            <div className={styles.studioResult}>
                                {result}
                            </div>
                        )
                    }
                    {
                        pageState == "code" && (
                            <CodeBlock
                                customStyle={{
                                    fontFamily: "monospace",
                                    fontStyle: "normal",
                                    width: "50%"
                                }}
                                text={`import React from 'react'
import { CommandPrompt, Link, SEO, Text, Card, Code, CodePreview, Header, Highlight, Image, Title } from '../ui/components/core'

const Installation = () => {
  return (
    <>
      <SEO
        title={"Installation - Fastdocs"}
      />
      <Text>
        Before installing FastDocs into your project you need to have <Link openInNewWindow={true} href={"https://nodejs.org/download"}>Node.js</Link> installed on your system.
        Along with a React project to install into.
      </Text>
      <Text>
        To install run:
      </Text>
      <CommandPrompt
        content='npx fastdocs init'
      />
      <Text>If you didn't receive any error messages in your terminal that means FastDocs has been successfully installed into your project.</Text>
    </>
  ) 
}

export default Installation`}
                                language='ts'
                                showLineNumbers={true}
                                theme={theme == "dark" ? darkTheme : github}
                            />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default StudioPage