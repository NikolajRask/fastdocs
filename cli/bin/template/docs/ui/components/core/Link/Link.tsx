import React from 'react'
import styles from '../core.module.scss'
import { useDocsContext } from '@/docs/context/context';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import LinkIcon from '@/docs/ui/svgs/LinkIcon';

interface LinkProps {
    href?: string;
    page?: string;
    children: React.ReactNode;
    openInNewWindow?: boolean,
    withIcon?: boolean
}

const Link = ({
    href,
    page,
    children,
    openInNewWindow=false,
    withIcon=true,
    ...rest
}: React.HTMLAttributes<HTMLDivElement> & LinkProps) => {

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
                        className={styles.link}
                    >
                        <span>
                            {children}
                        </span>
                        {withIcon && <ExternalLinkIcon/>}
                    </a>
                ) : (
                    <a 
                        href={href}
                        onClick={() => {
                            if (page) {
                                setPage(page)
                            }
                        }}
                        className={styles.link}
                    >
                        <span>
                            {children}
                        </span>
                        {withIcon && <LinkIcon/>}
                    </a>
                )
            }
        </>
    )
}

export default Link
