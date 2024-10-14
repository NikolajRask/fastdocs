import React from 'react'
import { useDocsContext } from '../context/context'
import Page404 from '../ui/components/404/404'
import useSettings from '../utils/settings/use-settings'
import use404 from '../utils/use-404'
import { Breadcrumb, Header, Navigator } from '../ui/components/core'


interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({
    children
}: LayoutProps) => {

  const { page } = useDocsContext()

  use404()

  if (page == useSettings().missingPage) {
    return (
      <>
        <Page404/>
        {children}
      </>
    )
  } else {
    return (
      <>
          <Breadcrumb/>
          <Header/>
          {children}
          <Navigator/>
  
      </>
    )
  }
}

export default Layout