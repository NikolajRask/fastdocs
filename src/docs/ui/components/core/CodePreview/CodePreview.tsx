import React, { useState } from 'react'
import styles from '../core.module.scss'
import { CodeBlock, irBlack } from 'react-code-blocks'
import useSettings from '@/docs/utils/settings/use-settings'

interface CodePreviewProps {
    code: string,
    preview: React.ReactNode
}

const CodePreview = ({
    code,
    preview
}: CodePreviewProps) => {

    const [tab, setTab] = useState(true)

    return (
        <>
            <div className={styles.codeTabs}>
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
                        {preview}
                    </div>
                )
            }
        </>
    )
}

export default CodePreview