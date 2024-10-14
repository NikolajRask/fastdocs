/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import { Text, Code, Highlight, Blockquote } from '../../ui/components/core'

const BlockquotePage = () => {
  return (
    <>
      
      <Text>The </Text>      
      <Highlight>{"<Blockquote/>"}</Highlight>      
      <Text> component is used to create a blockquote to display some text that is important for the reader to read.</Text>      
      <br/>      
      <br/>      
      <Text>This is how the </Text>      
      <Highlight>{"<Blockquote/>"}</Highlight>      
      <Text> component looks.</Text>      
      <br/>      
      <br/>      
      <Blockquote>This is a blockquote</Blockquote>      
      <br/>      
      <Text>Example of how to use the </Text>      
      <Highlight>{"<Blockquote/>"}</Highlight>      
      <Text> component.</Text>      
      <br/>      
      <br/>      
      <Code code={`
import React from 'react'
import { Text, Header, Blockquote } from '../ui/components/core'

const SomePage = () => {
  return (
    <>
		<Header
			title={"This is a header"}
		/>
		<Text>This is a text</Text>
		<Blockquote>This is a blockquote</Blockquote>
    </>
  ) 
}

export default SomePage
`}
      />
    </>
  ) 
}

export default BlockquotePage