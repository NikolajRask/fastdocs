/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import styles from '../core.module.scss'
import { CodeBlock, irBlack } from 'react-code-blocks'
import useSettings from '@/docs/utils/settings/use-settings'
import { cuid } from '@/docs/utils/utils';
import { useDocsContext } from '@/docs/context/context';

interface CodePreviewProps {
    code: string,
    children: React.ReactNode,
    file?: string;
}

const CodePreview = ({
    code,
    children,
    file,
    ...rest
}: React.HTMLAttributes<HTMLDivElement> & CodePreviewProps) => {

    const [tab, setTab] = useState(true)

    const { addTitleToContent } = useDocsContext()

    const id = cuid()
    
    useEffect(() => {
        if (file) {
            addTitleToContent(file as string, id)
        }
    }, [])

    return (
        <>
            {
                file && (
                    <p className={styles.codeFile} id={`content-${file as string}`}>{file}</p>
                )
            }
            <div className={styles.codeTabs} {...rest}>
                <div
                    onClick={() => {
                        setTab(true)
                    }}
                    style={{
                        color: tab ? useSettings().color : "black"
                    }}
                >
                    Code
                </div>
                <div
                    onClick={() => {
                        setTab(false)
                    }}
                    style={{
                        color: !tab ? useSettings().color : "black"
                    }}
                >
                    Preview
                </div>
            </div>
            {
                tab ? (
                    <CodeBlock
                        customStyle={{
                            borderRadius: "0px 0px 10px 10px",
                            fontFamily: "monospace",
                            marginBottom: "10px",
                            fontStyle: "normal",
                        }}
                        text={code.trim()}
                        language='typescript'
                        showLineNumbers={true}
                        theme={irBlack}
                    />
                ) : (
                    <div className={styles.codePreview}>
                        {children}
                    </div>
                )
            }
        </>
    )
}

export default CodePreview