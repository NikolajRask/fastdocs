import React from 'react'
import { Text, Code, Highlight} from '../../ui/components/core'

const TextPage = () => {
  return (
    <>
      
      <Text>The </Text>      
      <Highlight>{"<Text/>"}</Highlight>      
      <Text> component is used for writing basic text, and serves as docsfasts alternative to the {"<p>"} tag.</Text>      
      <br/>      
      <br/>      
      <Text>Example on how to use the </Text>      
      <Highlight>{"<Text/>"}</Highlight>      
      <Text> component:</Text>      
      <br/>      
      <br/>      
      <Code code={`
import React from 'react'
import { Text } from '../ui/components/core'

const SomePage = () => {
  return (
    <>
		<Text>This is a text</Text>
    </>
  ) 
}

export default CustomComponents
`}
      />
    </>
  ) 
}

export default TextPage