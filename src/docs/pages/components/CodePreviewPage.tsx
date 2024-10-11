/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import { Text, Code, Highlight, CodePreview } from '../../ui/components/core'

const CodePreviewPage = () => {
  return (
    <>
      
      <Text>The </Text>      
      <Highlight>{"<CodePreview/>"}</Highlight>      
      <Text> component is used to display code in your documentation with a preview of what the code does.</Text>      
      <br/>      
      <br/>      
      <Text>This is how the </Text>      
      <Highlight>{"<CodePreview/>"}</Highlight>      
      <Text> component looks</Text>      
      <br/>      
      <br/>      
      <CodePreview code={`<p>Hello World</p>`}>
        <p>Hello World</p>
      </CodePreview>      
      <br/>      
      <Text>Example of how to use the code component</Text>      
      <br/>      
      <br/>      
      <Code code={`
import React from 'react'
import { CodePreview } from '../ui/components/core'

const SomePage = () => {
  return (
    <>
		<CodePreview
			code={"<p>Hello World</p>"}
		>
			<p>Hello World</p>
		<CodePreview/>
		<CodePreview
			file="helloworld.html"
			code={"<p>Hello World</p>"}
		>
			<p>Hello World</p>
		<CodePreview/>
    </>
  ) 
}

export default SomePage`}
      />      
      <br/>      
      <Text>The </Text>      
      <Highlight>{"<CodePreview/>"}</Highlight>      
      <Text> component can take in 2 attributes</Text>      
      <br/>      
      <br/>      
      <Highlight>{"code"}</Highlight>      
      <Text>: The actual code that you want to display.</Text>      
      <br/>      
      <Highlight>{"children"}</Highlight>      
      <Text>: The preview that you want to display.</Text>      
      <br/>      
      <Highlight>{"file?"}</Highlight>      
      <Text>: The filename that is displayed with the code.</Text>
    </>
  ) 
}

export default CodePreviewPage