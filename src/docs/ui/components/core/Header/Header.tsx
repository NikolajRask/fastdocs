import { useDocsContext } from '@/docs/context/context';
import React, { useEffect } from 'react'
import styles from '../core.module.scss'

interface HeaderProps {
    title?: string;
}

const Header = ({
    title
}: HeaderProps) => {

    const { page, addTitleToContent} = useDocsContext()

    useEffect(() => {
        console.log("Added")
        addTitleToContent(title ?? page)
    }, [])

    return (
        <h1 className={styles.header}>{title ?? page}</h1>
    )
}

export default Header