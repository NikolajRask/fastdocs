import React from 'react'
import styles from '../core.module.scss'

interface CardProps {
    children: React.ReactNode
}

const Card = ({
    children,
    ...rest
    
}: React.HTMLAttributes<HTMLDivElement> & CardProps) => {
  return (
    <div className={styles.card} {...rest}>
        {children}
    </div>
  )
}

export default Card