import React, { useEffect } from 'react'
import { CodeBlock, irBlack } from 'react-code-blocks'
import styles from '../core.module.scss'
import { cuid } from '@/docs/utils/utils';
import { useDocsContext } from '@/docs/context/context';

interface CodeProps{
    code: string;
    file?: string;
}

const Code = ({
    code,
    file,
    ...rest
}: React.HTMLAttributes<HTMLDivElement> & CodeProps) => {

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
          {...rest}
      />
    </>
  )
}

export default Code