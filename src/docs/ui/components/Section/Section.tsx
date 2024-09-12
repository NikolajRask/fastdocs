import React from 'react'
import styles from './section.module.scss'
import { SectionProvider } from '@/docs/context/section';

interface SectionProps {
    name: string;
    children: React.ReactNode;
}

const Section = ({
    name,
    children
}: SectionProps) => {
  return (

    <SectionProvider name={name}>
        <div>
            {children}
        </div>
    </SectionProvider>
  )
}

export default Section
