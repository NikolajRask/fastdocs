/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import { CommandPrompt, Text, Code,  Highlight } from '../../ui/components/core'

const CommandPromptPage = () => {
  return (
    <>
      
      <Text>The </Text>      
      <Highlight>{"<CommandPrompt/>"}</Highlight>      
      <Text> component is used to show a view of a </Text>      
      <Highlight>{"terminal"}</Highlight>      
      <Text> or a </Text>      
      <Highlight>{"command prompt"}</Highlight>      
      <Text>. This is usefull when showing the user some commands that they may need to use in order to use your program.</Text>      
      <br/>      
      <br/>      
      <Text>This is how a </Text>      
      <Highlight>{"<CommandPrompt/>"}</Highlight>      
      <Text> component  looks.</Text>      
      <br/>      
      <CommandPrompt content={`npx docsfast init && cd docs`}/>      
      <Text> </Text>      
      <br/>      
      <Text>When wanted to display multiple commands in the same command prompt view the you need to use </Text>      
      <Highlight>{"&&"}</Highlight>      
      <Text> in between each command. This will also allow your viewers to copy the commands and execute them all at the same time.</Text>      
      <br/>      
      <br/>      
      <Text>An example of how to use the </Text>      
      <Highlight>{"<CommandPrompt/>"}</Highlight>      
      <Text> component.</Text>      
      <br/>      
      <br/>      
      <Code code={`
import React from 'react'
import { Text, Header, CommandPrompt } from '../ui/components/core'

const SomePage = () => {
  return (
    <>
		<Header
			title={"This is a header"}
		/>
		<Text>This is a text</Text>

		// commandprompt with one command
		<CommandPrompt
			content={"npx docsfast init"}
		/>
		<CommandPrompt
			content={"npx docsfast init && cd docs"}
		/>
    </>
  ) 
}

export default SomePage`}
      />
    </>
  ) 
}

export default CommandPromptPage