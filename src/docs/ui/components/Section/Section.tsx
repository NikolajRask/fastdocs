import React from 'react'
import styles from './section.module.scss'
import { SectionProvider } from '@/docs/context/section';

interface SectionProps {
    name: string;
    children: React.ReactNode;
    alwaysOpen?: boolean;
}

const Section = ({
    name,
    children,
    alwaysOpen=false
}: SectionProps) => {
  return (

    <SectionProvider alwaysOpen={alwaysOpen} name={name}>
        <div>
            {children}
        </div>
    </SectionProvider>
  )
}

export default Section
