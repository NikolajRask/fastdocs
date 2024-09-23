import React, { ReactNode, useEffect } from 'react'
import styles from '../core.module.scss'
import { useDocsContext } from '@/docs/context/context'

interface TitleProps {
    children: React.ReactNode
}

const Title = ({
    children
}: TitleProps) => {

  const { addTitleToContent } = useDocsContext()

  useEffect(() => {
    console.log("Added")
    addTitleToContent(children as string)
  }, [])

  return (
    <h2 className={styles.title}>{children}</h2>
  )
}

export default Title