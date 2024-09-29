import React from 'react'
import styles from '../core.module.scss'

interface StepsProps {
    children: React.ReactNode
}

const Steps = ({
    children,
    ...rest
}: React.HTMLAttributes<HTMLDivElement> & StepsProps) => {
  return (
    <div className={styles.steps} {...rest}>
      {children}
    </div>
  )
}

export default Steps
