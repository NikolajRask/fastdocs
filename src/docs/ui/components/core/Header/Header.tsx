import { useDocsContext } from '@/docs/context/context';
import React from 'react'
import styles from '../core.module.scss'

interface HeaderProps {
    title?: string;
}

const Header = ({
    title
}: HeaderProps) => {

    const { page } = useDocsContext()

    return (
        <h1 className={styles.header}>{title ?? page}</h1>
    )
}

export default Header