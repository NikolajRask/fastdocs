import React from 'react'
import styles from '../core.module.scss'
import { useDocsContext } from '@/docs/context/context';

interface LinkProps {
    href?: string;
    page?: string;
    children: React.ReactNode;
}

const Link = ({
    href,
    page,
    children
}: LinkProps) => {

const { setPage } = useDocsContext()

    return (
        <a 
            href={href}
            onClick={() => {
                if (page) {
                    setPage(page)
                }
            }}
        >
            {children}
        </a>
    )
}

export default Link
