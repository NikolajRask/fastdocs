/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import { Text, Code, Highlight, Breadcrumb } from '../../ui/components/core'

const BreadcrumbPage = () => {
  return (
    <>
      
      <Text>The </Text>      
      <Highlight>{"<Breadcrumb/>"}</Highlight>      
      <Text> component is usally used in the beginning of a page to display what documentation and section the page is located at.</Text>      
      <br/>      
      <br/>      
      <Text>The  </Text>      
      <Highlight>{"<Breadcrumb/>"}</Highlight>      
      <Text> component is by default used in the </Text>      
      <Highlight>{"layout.tsx"}</Highlight>      
      <Text> file.</Text>      
      <br/>      
      <br/>      
      <Text>This is how the  </Text>      
      <Highlight>{"<Breadcrumb/>"}</Highlight>      
      <Text> component looks</Text>     
      <br/>
      <br/>
      <Breadcrumb/> 
      <br/>      
      <br/>      
      <Text>Example of how to use the </Text>      
      <Highlight>{"<Breadcrumb/>"}</Highlight>      
      <Text> component.</Text>      
      <br/>      
      <br/>      
      <Code code={`
import React from 'react'
import { Text, Header, Breadcrumb  } from '../ui/components/core'

const SomePage = () => {
  return (
    <>
		<Breadcrumb/>
		<Header
			title={"This is a header"}
		/>
		<Text>This is a text</Text>
    </>
  ) 
}

export default SomePage
`}
      />
    </>
  ) 
}

export default BreadcrumbPage