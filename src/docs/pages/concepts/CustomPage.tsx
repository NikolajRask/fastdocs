/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import { CommandPrompt, Text, Highlight, Title, Blockquote } from '../../ui/components/core'

const CustomizabilityPage = () => {
  return (
    <>
      
      <Title>Our concept</Title>        
      <Text>The concept of docsfast is that it can both be used straight out of the box with no tweaking, and that it can also be used by people who want to build on top of it and customize it to their preference. We achieve this by making the code open-source for anyone to see and download. So that any change that you want to make, can be made.</Text>      
      <br/>      
      <br/>      
      <Title>How to customize Docsfast</Title>          
      <Text>If you want to customize Docsfast, you can either use the </Text>      
      <Highlight>{"cli"}</Highlight>      
      <Text> command</Text>      
      <br/>      
      <CommandPrompt content={`npx docsfast init`}/>      
      <Text>  And initialize docsfast inside of a project and because this downloads the source code directly into your project, you can make your changes directly in your own code.</Text>      
      <br/>      
      <br/>      
      <Blockquote>Note that by using this approach you will not be able to update to newer relases of fastdocs in the future without reseting your custom changes.</Blockquote>      
      <br/>      
      <br/>      
      <Title>Fork the project</Title>       
      <Text>Another approach is to fork the project from github and make your desired changes in a forked project. To do this you need to use the command.</Text>      
      <br/>      
      <CommandPrompt content={`git fork docsfast`}/>
    </>
  ) 
}

export default CustomizabilityPage