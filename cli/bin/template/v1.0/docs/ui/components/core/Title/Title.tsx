import React, { ReactNode, useEffect } from 'react'
import styles from '../core.module.scss'
import { useDocsContext } from '@/docs/context/context'
import { cuid } from '@/docs/utils/utils'

interface TitleProps {
    children: React.ReactNode
}

const Title = ({
    children,
    ...rest
}: React.HTMLAttributes<HTMLDivElement> & TitleProps) => {

  const { addTitleToContent } = useDocsContext()

  const id = cuid()

  useEffect(() => {
    addTitleToContent(children as string, id)
  }, [])

  return (
    <h2 className={styles.title} id={`content-${children as string}`} {...rest}>{children}</h2>
  )
}

export default Title