import React from 'react'
import Breadcrumb from '../ui/components/core/Breadcrumb/Breadcrumb'
import Navigator from '../ui/components/core/Navigator/Navigator'
import Header from '../ui/components/core/Header/Header'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({
    children
}: LayoutProps) => {
  return (
    <>
        <Breadcrumb/>
        <Header/>
        {children}
        <Navigator/>
    </>
  )
}

export default Layout