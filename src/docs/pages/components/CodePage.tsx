/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import { Text, Code, Highlight } from '../../ui/components/core'

const CodePage = () => {
  return (
    <>
      
      <Text>The </Text>      
      <Highlight>{"<Code/>"}</Highlight>      
      <Text> component is used to display code in your documentation. </Text>      
      <br/>      
      <br/>      
      <Text>This is how the </Text>      
      <Highlight>{"<Code/>"}</Highlight>      
      <Text> component looks</Text>      
      <br/>      
      <br/>      
      <Code code={`console.log("This is some code")`}
      />      
      <br/>      
      <Text>Example of how to use the code component</Text>      
      <br/>      
      <br/>      
      <Code code={`
import React from 'react'
import { Code } from '../ui/components/core'

const SomePage = () => {
  return (
    <>
		<Code
			code={"console.log('Hello World')"}
		/>
		<Code
			file="helloworld.js"
			code={"console.log('Hello World')"}
		/>
    </>
  ) 
}

export default SomePage`}
      />      
      <br/>      
      <Text>The </Text>      
      <Highlight>{"<Code/>"}</Highlight>      
      <Text> component can take in 2 attributes</Text>      
      <br/>      
      <br/>      
      <Highlight>{"code"}</Highlight>      
      <Text>: The actual code that you want to display</Text>      
      <br/>      
      <Highlight>{"file?"}</Highlight>      
      <Text>: The filename that is displayed with the code</Text>
    </>
  ) 
}

export default CodePage