/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import { Text, Code, Highlight } from '../../ui/components/core'

const LayoutPage = () => {
  return (
    <>
      
      <Text>Inside the </Text>      
      <Highlight>{"pages"}</Highlight>      
      <Text> folder there is a file called </Text>      
      <Highlight>{"layout.tsx"}</Highlight>      
      <br/>      
      <br/>      
      <Text>This is the layout of every page in the documentation. This file can be used to add components that you use on all pages so that you don't have to add them all manually.</Text>      
      <br/>      
      <br/>      
      <Text>The </Text>      
      <Highlight>{"layout.tsx"}</Highlight>      
      <Text> file looks like this by default</Text>      
      <br/>      
      <br/>      
      <Code code={`import React from 'react'
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

export default Layout`}
      />      
      <br/>      
      <Text>This layout provides a </Text>      
      <Highlight>{"404"}</Highlight>      
      <Text> page if no page has been found and provides the </Text>      
      <Highlight>{"<Breadcrumb/>"}</Highlight>      
      <Text>, </Text>      
      <Highlight>{"<Header/>"}</Highlight>      
      <Text> and </Text>      
      <Highlight>{"<Navigator/>"}</Highlight>      
      <Text> component wrapped around the content of the page.</Text>
    </>
  ) 
}

export default LayoutPage