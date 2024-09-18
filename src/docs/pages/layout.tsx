import React from 'react'
import Breadcrumb from '../ui/components/core/Breadcrumb/Breadcrumb'
import Navigator from '../ui/components/core/Navigator/Navigator'
import Header from '../ui/components/core/Header/Header'
import { useDocsContext } from '../context/context'
import MissingPage from '../ui/components/404/404'
import Page404 from '../ui/components/404/404'
import useSettings from '../settings'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({
    children
}: LayoutProps) => {

  const { page } = useDocsContext()

  if (page == useSettings("404")) {
    return (
      <Page404/>
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