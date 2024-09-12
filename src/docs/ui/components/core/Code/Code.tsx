import React from 'react'
import { CodeBlock, dracula, a11yDark, irBlack } from 'react-code-blocks'

interface CodeProps{
    code: string
}

const Code = ({
    code
}: CodeProps) => {
  return (
    <CodeBlock
        customStyle={{
            borderRadius: "10px",
            fontFamily: "monospace"
        }}
        text={code.trim()}
        language='typescript'
        showLineNumbers={true}
        theme={irBlack}
    />
  )
}

export default Code