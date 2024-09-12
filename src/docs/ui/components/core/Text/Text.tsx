import React from 'react'
import styles from '../core.module.scss'

interface TextProps {
    children: React.ReactNode
}

const Text = ({
    children
}: TextProps) => {
  return (
    <div className={styles.text}>
      {children}
    </div>
  )
}

export default Text
