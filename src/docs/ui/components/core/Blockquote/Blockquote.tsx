import React from 'react'
import styles from '../core.module.scss'

interface BlockquoteProps {
    children: React.ReactNode
}

const Blockquote = ({
    children
}: BlockquoteProps) => {
  return (
    <div className={styles.blockquote}>{children}</div>
  )
}

export default Blockquote