import React from 'react'
import styles from '../core.module.scss'

interface CardProps {
    children: React.ReactNode
}

const Card = ({
    children,
    
}: React.HTMLAttributes<HTMLDivElement> & CardProps) => {
  return (
    <div className={styles.card}>
        {children}
    </div>
  )
}

export default Card