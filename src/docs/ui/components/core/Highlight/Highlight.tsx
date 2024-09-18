import React from 'react'
import styles from '../core.module.scss'

interface HighlightProps {
  children: React.ReactNode
}

const Highlight = ({
  children,
}: HighlightProps) => {
  return (
    <span
      className={styles.highlight}
    >
      {children}
    </span>
  )
}

export default Highlight