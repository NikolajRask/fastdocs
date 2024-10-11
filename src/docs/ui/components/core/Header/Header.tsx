import { useDocsContext } from '@/docs/context/context';
import React, { useEffect } from 'react'
import styles from '../core.module.scss'
import { cuid } from '@/docs/utils/utils';

interface HeaderProps {
    title?: string;
}

const Header = ({
    title,
    ...rest
}: React.HTMLAttributes<HTMLDivElement> & HeaderProps) => {

    const { page, addTitleToContent} = useDocsContext()

    const id = cuid();

    useEffect(() => {
        addTitleToContent(title ?? page, id)
    }, [])

    return (
        <h1 className={styles.header} id={`content-${title ?? page}`} {...rest}>{title ?? page}</h1>
    )
}

export default Header