import React from 'react'
import { Text, Highlight } from '../../ui/components/core'

const CustomComponents = () => {
  return (
    <>
      <Text>Even though docsfast provide a bunch of ready to use components for building documentation, docsfast is open-source and the </Text>      
      <Highlight>{"<Page/>"}</Highlight>      
      <Text> component can display all JSX and HTML components.</Text>      
      <br/>      
      <br/>      
      <Text>This means that you can build and use any react component that you want inside of docsfast.</Text>

    </>
  ) 
}

export default CustomComponents