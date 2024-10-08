import { useDocsContext } from '@/docs/context/context'
import React from 'react'
import styles from '../core.module.scss'
import { CaretRightIcon } from '@radix-ui/react-icons'
import useSettings from '@/docs/utils/settings/use-settings'

const Breadcrumb = (props: React.HTMLAttributes<HTMLDivElement>) => {

    const { docsTitle, page, getPageSection, setPage, getFirstPageInSection, allTitles } = useDocsContext()

    return (
        <div className={styles.breadcrumb} {...props}>
            <b
                className={styles.clickable}
                onClick={() => {
                    setPage(allTitles()[0])
                }}
            >
                {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
                {docsTitle.trim() == "" ? useSettings().defaultDocsTitle : docsTitle}
            </b>
            {
                getPageSection(page) != undefined && (
                    <>
                        <CaretRightIcon/>
                        <p
                            className={styles.clickable}
                            onClick={() => {
                                if (getPageSection(page) != undefined) {
                                    const newPage = getFirstPageInSection(getPageSection(page) ?? "")
                                    if (newPage != undefined) {
                                        setPage(newPage)
                                    }
                                }
                            }}
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