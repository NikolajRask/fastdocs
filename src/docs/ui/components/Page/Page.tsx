"use client"

import { useDocsContext } from '@/docs/context/context';
import React, { useEffect } from 'react'

interface PageProps {
    children: React.ReactNode
    title: string
}

const Page = ({
    children,
    title
}: PageProps) => {

  const { addTitle, page } = useDocsContext();

  useEffect(() => {
    addTitle(title);
  }, []);

  return (
    <>
      {
        page == title && (
          children
        )
      }
    </>
  )
}

export default Page