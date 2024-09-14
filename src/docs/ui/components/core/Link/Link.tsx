import React from 'react'
import styles from '../core.module.scss'
import { useDocsContext } from '@/docs/context/context';

interface LinkProps {
    href?: string;
    page?: string;
    children: React.ReactNode;
    openInNewWindow?: boolean
}

const Link = ({
    href,
    page,
    children,
    openInNewWindow=false
}: LinkProps) => {

const { setPage } = useDocsContext()

    return (
        <>
            {
                openInNewWindow ? (
                    <a 
                        onClick={() => {
                            if (page) {
                                setPage(page)
                            }
                            if (href) {
                                window.open(href)
                            }
                        }}
                    >
                        {children}
                    </a>
                ) : (
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
        </>
    )
}

export default Link
