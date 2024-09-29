import React from 'react'
import styles from '../core.module.scss'

interface TextProps {
    children: React.ReactNode
}

const Text = ({
    children,
    ...rest
}: React.HTMLAttributes<HTMLDivElement> & TextProps) => {
  return (
    <div className={styles.text} {...rest}>
      {children}
    </div>
  )
}

export default Text
