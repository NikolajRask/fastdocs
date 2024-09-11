import React, { ReactNode } from 'react'
import styles from '../core.module.scss'

interface TitleProps {
    children: React.ReactNode
}

const Title = ({
    children
}: TitleProps) => {
  return (
    <h2 className={styles.title}>{children}</h2>
  )
}

export default Title