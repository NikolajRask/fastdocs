import React from 'react'
import styles from '../core.module.scss'

interface GridProps {
    children: React.ReactNode,
}

const Grid = ({
    children,
    ...rest
}: React.HTMLAttributes<HTMLDivElement> & GridProps) => {
  return (
    <div className={styles.grid} {...rest}>
        {children}
    </div>
  )
}

export default Grid