import React from 'react'
import styles from './commandprompt.module.scss'
import { CopyIcon } from '@radix-ui/react-icons'

interface CommandPromptProps {
    content: string 
}

const CommandPrompt = ({
    content
}: CommandPromptProps) => {

    const copyText = async (text: string) => {
        try {
          await navigator.clipboard.writeText(text);
        } catch (err) {
          console.error("Failed to copy text: ", err);
        }
      };

  return (
    <div className={styles.commandprompt}>
        <div>
            <span className={styles.white}>{content.split(" ")[0]}</span>
            <span className={styles.gray}>{content.replace(content.split(" ")[0]," ")}</span>
        </div>
        <CopyIcon
            onClick={() => {
                copyText(content)
            }}
            className={styles.copy}
        />
    </div>
  )
}

export default CommandPrompt
