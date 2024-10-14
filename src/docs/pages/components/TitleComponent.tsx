import React from 'react'
import {Text, Code, Highlight, Title } from '../../ui/components/core'

const TitlePage = () => {
  return (
    <>
      
      <Text>The </Text>      
      <Highlight>{"<Title/>"}</Highlight>      
      <Text> component is used to create header 2 titles in a page. </Text>      
      <br/>      
      <br/>      
      <Title>This is what a title looks like</Title>      
      <br/>            
      <Text>Using the title component is very simple and can be done like this:</Text>      
      <br/>      
      <br/>      
      <Code code={`
import React from 'react'
import { Text, Title } from '../ui/components/core'

const SomePage = () => {
  return (
    <>
		<Title>This is a title</Title>
		<Text>This is a text</Text>
    </>
  ) 
}

export default CustomComponents
`}
      />      
      <br/>      
      <br/>      
      <Text>The </Text>      
      <Highlight>{"<Title/>"}</Highlight>      
      <Text> component automaticly creates an item in the table of contents menu if it is activated for the page.</Text>
    </>
  ) 
}

export default TitlePage