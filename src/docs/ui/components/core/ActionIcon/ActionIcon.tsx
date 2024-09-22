import React from 'react'
import styles from  './actionicon.module.scss'
import classNames from '@/docs/utils/utils';

interface ActionIconProps {
    width?: string;
    height?: string;
    className?: string | undefined;
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const ActionIcon = ({
    width="30px",
    height="30px",
    className,
    children,
    onClick,
    ...props
}:  React.HTMLAttributes<HTMLDivElement> & ActionIconProps) => {
  return (
    <div 
        className={classNames(styles.actionIcon, className)}
        onClick={(e) => {
            if (onClick) {
                onClick(e)
            }
        }}
        style={{
            width: width,
            height: height
        }}
        {...props}
    >
        {children}
    </div>
  )
}

export default ActionIcon