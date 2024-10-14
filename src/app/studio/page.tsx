"use client"

import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { findPageName, Markdown, TranslateCode } from './utils/translator'
import { QuestionMarkIcon } from '@radix-ui/react-icons'
import Modal from '@/docs/ui/components/custom/Modal/Modal'
import { a11yDark, CodeBlock, github } from 'react-code-blocks'
import useSettings from '@/docs/utils/settings/use-settings'
import { CopyIcon } from 'lucide-react'
import ProjectManager, { DataType } from './project-manager/ProjectManager'
import { Highlight } from '@/docs/ui/components/core'
import { useMemory } from './project-manager/hooks/useMemory'
import { useTheme } from '@/docs/utils/use-theme'
import ThemePicker from '@/docs/ui/components/custom/theme-picker/ThemePicker'
import HomeIcon from '@/assets/svg/HomeIcon'
import CloseIcon from '@/assets/svg/CloseIcon'
import OpenIcon from '@/assets/svg/OpenIcon'
import DocsIcon from '@/assets/svg/DocsIcon'
import SupportIcon from '@/assets/svg/SupportIcon'
import CheckIcon from '@/assets/svg/CheckIcon'
import CodeIcon from '@/assets/svg/CodeIcon'
import PreviewIcon from '@/assets/svg/PreviewIcon'

const StudioPage = () => {

    if (useMemory("menuState") == undefined) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useMemory("menuState", "true")
    }
    
    const [result, setResult] = useState<React.ReactNode>()
    const [isHelpModalOpen, setIsHelpModalOpen] = useState(false)
    const [pageState, setPageState] = useState("preview")
    const [isMenuOpen, setIsMenuOpen] = useState(useMemory("menuState") == "true" ? true : false)
    const [currentMarkdown, setCurrentMarkdown] = useState("")
    const [currentPage, setCurrentPage] = useState(useMemory("currentPage"))
    const [isCopied, setIsCopied] = useState(false)
    const [code, setCode] = useState(``)
    const [currentPageLabel, setCurrentPageLabel] = useState(findPageName(useMemory("currentPage")) ?? "")

    document.title = "Docsfast | Studio"

    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useMemory("menuState", isMenuOpen == true ? "true" : "false")
    }, [isMenuOpen])

    const [theme, setTheme] = useState(useTheme())
    useEffect(() => { // Fetch saved changes
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const lookup = useMemory("projects") as DataType[]

        const currentProject = lookup.find((x) => x.pages.map((page) => page.id).includes(currentPage))

        const pageContent = currentProject?.pages.find((x) => x.id == currentPage)


        if (pageContent != undefined) {
            setCurrentMarkdown(pageContent.content)
            setResult(Markdown(pageContent.content))
            setCode(TranslateCode(pageContent.content, currentPageLabel))
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, currentPageLabel])

    function saveProgress(markdown: string) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const projects = useMemory("projects") as DataType[]

        const currentProjectIndex = projects.findIndex((x) => x.pages.map((page) => page.id).includes(currentPage))

        if (currentProjectIndex != -1) {
            const copyCurrentProject = projects[currentProjectIndex]
    
            const currentPageIndex = copyCurrentProject.pages.findIndex((x) => x.id == currentPage)

            if (currentPageIndex != -1) {
                const copyCurrentPage = copyCurrentProject.pages[currentPageIndex]
    
                copyCurrentPage.content = markdown
        
                copyCurrentProject.pages[currentPageIndex] = copyCurrentPage
        
                projects[currentProjectIndex] = copyCurrentProject
        
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useMemory("projects", projects)
            }

        }
    }

    const darkTheme = a11yDark
    darkTheme.backgroundColor = "#121212"

    function copyCode() {
        if (navigator?.clipboard?.writeText) {
            navigator.clipboard.writeText(code).then(
              () => {
                setIsCopied(true)
              },
              (err) => {
                console.error('Failed to copy text: ', err);
              }
            );
          } else {
            console.error('Clipboard API not supported');
          }
    }

    useEffect(() => {
        if (isCopied == true) {
            setTimeout(() => {
                setIsCopied(false)
            }, 2500)
        }
    }, [isCopied])


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
                        <Highlight>==Highligt==</Highlight>
                        <p>Use ==== around text to highlight it</p>
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
                    width: isMenuOpen ? "300px" : "50px"
                }}
            >
                {isMenuOpen ? (
                    <>
                        <h1
                            className={styles.logo}
                        >
                            <a>D</a>ocsfast
                            <br/>
                        </h1>
                    </>
                ) : (
                    <h1
                        className={styles.logo}
                    >
                        <a>D</a>
                    </h1>
                )}
                <a href={"/"}>
                    <div 
                        className={styles.menuLink}
                        style={{
                            margin: isMenuOpen ? 7 : 7,
                            padding: isMenuOpen ? 5 :  5,
                            borderRadius: isMenuOpen ? 5 : 5,
                            marginBlock: isMenuOpen ? 7 : 9.5,
                        }}
                    >
                        <HomeIcon />
                        <span
                            style={{
                                display: isMenuOpen ? "block" : "none"
                            }}
                        >Home</span>
                    </div>
                </a>
                <a href={"/docs"}>
                    <div 
                        className={styles.menuLink}
                        style={{
                            margin: isMenuOpen ? 7 : 7,
                            padding: isMenuOpen ? 5 :  5,
                            borderRadius: isMenuOpen ? 5 : 5,
                            marginBlock: isMenuOpen ? 7 : 9.5,
                        }}
                    >
                        <DocsIcon />
                        <span
                            style={{
                                display: isMenuOpen ? "block" : "none"
                            }}
                        >Docs</span>
                    </div>
                </a>
                <a href={"/support"}>
                    <div 
                        className={styles.menuLink}
                        style={{
                            margin: isMenuOpen ? 7 : 7,
                            padding: isMenuOpen ? 5 :  5,
                            borderRadius: isMenuOpen ? 5 : 5,
                            marginBlock: isMenuOpen ? 7 : 9.5,
                        }}
                    >
                        <SupportIcon />
                        <span
                            style={{
                                display: isMenuOpen ? "block" : "none"
                                
                            }}
                        >Support</span>
                    </div>
                </a>
                {
                    isMenuOpen && (
                        <ProjectManager 
                            setCurrentPageLabel={setCurrentPageLabel}
                            currentMarkdown={currentMarkdown} 
                            setCurrentMarkdown={setCurrentMarkdown} 
                            currentPage={currentPage} 
                            setCurrentPage={setCurrentPage}                    
                        />
                    ) 
                }
                {
                    isMenuOpen && (
                        <CloseIcon
                            style={{
                                position: "fixed",
                                bottom: "10px",
                                zIndex: 40,
                                left: 13,
                                cursor: "pointer",
                                color: "var(--text-color)",
                            }}
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen)
                            }}
                        />       
                    )
                }
                {
                    !isMenuOpen && (
                        <OpenIcon
                            style={{
                                position: "fixed",
                                bottom: "10px",
                                zIndex: 40,
                                left: 13,
                                cursor: "pointer",
                                translate: "rotate(180deg)",
                                color: "var(--text-color)",
                            }}
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen)
                            }}
                        />       
                    )
                }
            </div>
            <div 
                className={styles.studioContainer}
                style={{
                    width: isMenuOpen ? "calc(100vw - 300px)" : "calc(100vw - 50px)",
                    marginLeft: isMenuOpen ? "300px" : "50px",
                }}
            >
                {
                (currentPage != "") ? (
                    
                    <div 
                        className={styles.studioContentContainer}
                        style={{
                            width: isMenuOpen ? "calc(100vw - 301px)" : "calc(100vw - 51px)"
                        }}
                    >
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
                                onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                                    if (e.key == "Tab") {

                                        e.preventDefault()
                                        e.stopPropagation()

                                        const textarea = e.currentTarget;
                                  
                                        const start = textarea.selectionStart;
                                        const end = textarea.selectionEnd;
                                  
                                        // Insert tab character at the cursor position
                                        setCurrentMarkdown(currentMarkdown.slice(0, start) + "\t" + currentMarkdown.slice(end));
                                  
                                        // Move the cursor after the tab character
                                        setTimeout(() => {
                                          textarea.selectionStart = textarea.selectionEnd = start + 1;
                                        }, 0);
                                    }
                                }}
                                className={styles.studioEditor}
                                onChange={(e) => {
                                    setResult(Markdown(e.target.value))
                                    setCode(TranslateCode(e.target.value, currentPageLabel))
                                    setCurrentMarkdown(e.target.value)
                                    saveProgress(e.target.value)
                                }}
                                placeholder={"Write markdown here"}
                                value={currentMarkdown}
                            >
                            </textarea>
                        </div>
                        <div style={{
                            width: "50%",
                            position: "relative"
                        }}>
                            <div 
                                className={styles.studioNav}
                            >
                                <div className={styles.tabs}>
                                    <div 
                                        className={styles.tab}
                                        onClick={() => {
                                            setPageState("preview")
                                        }}
                                        style={{
                                            // eslint-disable-next-line react-hooks/rules-of-hooks
                                            color: pageState == "preview" ? useSettings().color : "var(--text-color)"
                                        }}
                                    >
                                        <PreviewIcon/>
                                        <span>Preview</span>
                                    </div>
                                    <div 
                                        className={styles.tab}
                                        onClick={() => {
                                            setPageState("code")
                                        }}
                                        style={{
                                            // eslint-disable-next-line react-hooks/rules-of-hooks
                                            color: pageState == "code" ? useSettings().color : "var(--text-color)"
                                        }}
                                    >
                                        <CodeIcon/>
                                        <span>{currentPageLabel.replaceAll(" ","")}.tsx</span>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        marginLeft: 20,
                                        marginRight: 20,
                                        marginTop: 0,
                                        display: "flex",
                                        gap: 10,
                                    }}
                                >
                                    {
                                        isCopied ? (
                                            <CheckIcon
                                                style={{
                                                    color: "var(--text-color)"
                                                }}
                                            />
                                        ) : (
                                            <CopyIcon
                                                style={{
                                                    cursor: "pointer",
                                                    color: "var(--text-color)"
                                                }}
                                                onClick={() => copyCode()}
                                            />
                                        )
                                    }
                                    <ThemePicker setLocalTheme={setTheme}/>
                                </div>
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
                                            width: "100%",
                                            height: "calc(100vh - 51px)",
                                            borderLeft: "1px solid var(--border-color)",
                                            marginTop: "51px",
                                        }}
                                        text={code}
                                        language='ts'
                                        showLineNumbers={true}
                                        theme={theme == "dark" ? darkTheme : github}
                                    />
                                )
                            }
                        </div>
                    </div>

                ) : (

                    <div 
                        className={styles.noPageSelected}
                        style={{
                            width: isMenuOpen ? "calc(100vw - 301px)" : "calc(100vw - 51px)"
                        }}
                    >
                        <div>
                            <h2>Select a page to edit</h2>
                            <p>Use the sidebar menu to create, select and delete pages</p>
                        </div>
                    </div>

                )
            }
            </div>

        </>
    )
}

export default StudioPage