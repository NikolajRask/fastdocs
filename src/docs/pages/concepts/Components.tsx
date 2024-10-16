/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import { Text, Title, Blockquote, Link } from '../../ui/components/core'
import useSettings from '@/docs/utils/settings/use-settings'

const ComponentsPage = () => {
  return (
    <>
      
      <Text>The way you create documentation in Docsfast is similar to building with a component library. We offer a bunch of different components that you can use in your React code to create your documentation. You can also create your own components and use them, or use native HTML to build your documentation.</Text>      
      <br/>      
      <br/>      
      <Title>Studio (beta)</Title>         
      <Text>If you don't want to manually write out the components for your documentation, then you can use Docsfast Studio to build documentation fast and easy for free. Click <Link href={"./studio"} openInNewWindow={true}>here</Link> to try Studio.</Text>      
      <br/>      
      <br/>      
      <Blockquote>Docsfast Studio is still in beta so leaving feedback on <Link href={`${useSettings().githubRepo}/issues`} openInNewWindow={true}>Github</Link> will be appreciated :)</Blockquote>
    </>
  ) 
}

export default ComponentsPage