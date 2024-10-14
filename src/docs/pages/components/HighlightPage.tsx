import React from 'react'
import { Text, Highlight, CodePreview } from '../../ui/components/core'

const HighlightPage = () => {
  return (
    <>
      
      <Text>The </Text>      
      <Highlight>{"<Highlight/>"}</Highlight>      
      <Text> component is used to highlight text just like </Text>      
      <Highlight>{"this"}</Highlight>      
      <Text>.</Text>      
      <br/>      
      <br/>      
      <Text>The highlight components color, font, background and more can be changed with CSS.</Text>      
      <br/>      
      <br/>      
      <Text>Example of how to use highlight:</Text>      
      <br/>      
      <br/>      
      <CodePreview code={`
import React from 'react'
import { Text, Highlight } from '../../ui/components/core'

const SomePage = () => {
  return (
    <>
		<Text>This is a documentation example for <Highlight>docsfast</Highlight> component</Text>
		<br/>
		<Highlight style={{color: "red"}}>This is a red highlight</Highlight>
    </>
  ) 
}

export default SomePage
`}
        
      >
        <Text>This is a documentation example for <Highlight>docsfast</Highlight> component</Text>
		<br/>
		<Highlight style={{color: "red"}}>This is a red highlight</Highlight>
      </CodePreview>
    </>
  ) 
}

export default HighlightPage