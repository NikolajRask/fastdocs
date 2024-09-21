import React from 'react'
import { CodeBlock, irBlack } from 'react-code-blocks'
import styles from '../core.module.scss'

interface CodeProps{
    code: string;
    file?: string;
}

const Code = ({
    code,
    file
}: CodeProps) => {
  return (
    <>
      {
        file && (
          <p className={styles.codeFile}>{file}</p>
        )
      }
      <CodeBlock
          customStyle={{
              borderRadius: "10px",
              fontFamily: "monospace",
              marginBottom: "10px",
              fontStyle: "normal"
          }}
          text={code.trim()}
          language='typescript'
          showLineNumbers={true}
          theme={irBlack}
      />
    </>
  )
}

export default Code