import React, { useEffect, useState } from 'react'
import styles from '../core.module.scss'
import { CheckIcon, CopyIcon } from '@radix-ui/react-icons'

interface CommandPromptProps {
    content: string 
}

const CommandPrompt = ({
    content,
    ...rest
}: React.HTMLAttributes<HTMLDivElement> & CommandPromptProps) => {

  const [isCopied, setIsCopied] = useState(false)

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  useEffect(() => {
    if (isCopied == true) {
      window.setTimeout(() => {
        setIsCopied(false)
      }, 3000)
    }
  }, [isCopied])

  return (
    <div className={styles.commandprompt} {...rest}>
        <div>
            {content.split("&&").map((line, index) => {

              line = line.trim()

              return (
                <div key={index}>
                  <span className={styles.white}>{line.split(" ")[0]}</span>
                  <span className={styles.gray}>{line.replace(line.split(" ")[0]," ")}</span>
                </div>
              )
            })}
        </div>
        {
          isCopied ? (
            <CheckIcon 
              className={styles.copy}
            />
          ) : (
            <CopyIcon
              onClick={() => {
                  copyText(content)
                  setIsCopied(true)
              }}
              className={styles.copy}
            />
          )
        }
    </div>
  )
}

export default CommandPrompt
