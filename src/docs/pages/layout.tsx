import React from 'react'
import Breadcrumb from '../ui/components/core/Breadcrumb/Breadcrumb'
import Navigator from '../ui/components/core/Navigator/Navigator'
import Header from '../ui/components/core/Header/Header'
import { useDocsContext } from '../context/context'
import Page404 from '../ui/components/404/404'
import use404 from '../utils/use-404'
import useSettings from '../utils/settings/use-settings'

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