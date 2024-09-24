import React from 'react'
import styles from '../core.module.scss'

interface HighlightProps {
  children: React.ReactNode
}

const Highlight = ({
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & HighlightProps) => {
  return (
    <span
      className={styles.highlight}
      {...rest}
    >
      {children}
    </span>
  )
}

export default Highlight