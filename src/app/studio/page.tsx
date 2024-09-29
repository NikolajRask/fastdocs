"use client"

import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Markdown } from './utils/translator'
import { QuestionMarkIcon } from '@radix-ui/react-icons'
import Modal from '@/docs/ui/components/custom/Modal/Modal'
import { atomOneDark, atomOneLight, CodeBlock, irBlack } from 'react-code-blocks'
import useSettings from '@/docs/utils/settings/use-settings'
import { MenuIcon } from 'lucide-react'

const StudioPage = () => {

    const [result, setResult] = useState(<></>)
    const [isHelpModalOpen, setIsHelpModalOpen] = useState(false)
    const [pageState, setPageState] = useState("preview")

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
                    width: 500,
                    height: 350,
                    borderRadius: 20,
                }}
            >
                <p>Markdown Guide</p>
            </Modal>
            <div className={styles.studioContainer}>
                <div className={styles.studioNav}>
                    <div className={styles.studioNavMenu}>
                        <MenuIcon/>
                        <h1
                            className={styles.logo}
                        >
                            <a>F</a>astdocs Studio
                        </h1>
                    </div>
                    <div className={styles.tabs}>
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
                            }}
                            placeholder={"Write markdown here"}
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
                                theme={atomOneDark}
                            />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default StudioPage