/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Text, Code, Highlight } from '../../ui/components/core'

const HeaderPage = () => {
  return (
    <>
      
      <Text>The </Text>      
      <Highlight>{"<Header/>"}</Highlight>      
      <Text> component is used to display the header of the page. This component is usually only used once for each page and by default it is used in the </Text>      
      <Highlight>{"layout.tsx"}</Highlight>      
      <Text> file and displaying the current page title.</Text>      
      <br/>      
      <br/>      
      <Text>Example on how to use the  </Text>      
      <Highlight>{"<Header/>"}</Highlight>      
      <Text> component:</Text>      
      <br/>      
      <br/>      
      <Code code={`
import React from 'react'
import { Text, Header } from '../../ui/components/core'

const SomePage = () => {
  return (
    <>
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
      <br/>      
      <Text>The header component doesn't take any children, but uses a </Text>      
      <Highlight>{"title"}</Highlight>      
      <Text> attribute to display the content.</Text>
    </>
  ) 
}

export default HeaderPage