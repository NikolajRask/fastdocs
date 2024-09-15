import { useDocsContext } from '@/docs/context/context'
import React from 'react'
import styles from '../core.module.scss'
import { CaretRightIcon } from '@radix-ui/react-icons'

const Breadcrumb = () => {

    const { docsTitle, page, getPageSection } = useDocsContext()

    return (
        <div className={styles.breadcrumb}>
            <b
                className={styles.clickable}
            >
                {docsTitle}
            </b>
            {
                getPageSection(page) != undefined && (
                    <>
                        <CaretRightIcon/>
                        <p
                            className={styles.clickable}
                        >
                            {getPageSection(page)}
                        </p>
                    </>
                )
            }
            <CaretRightIcon/>
            <p>{page}</p>
        </div>
    )
}

export default Breadcrumb