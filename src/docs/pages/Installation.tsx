import React from 'react'
import { CommandPrompt, Link, SEO, Text } from '../ui/components/core'

const Installation = () => {
  return (
    <>
      <SEO
        title={"Installation - Fastdocs"}
      />
      <Text>
        Before installing FastDocs into your project you need to have <Link openInNewWindow={true} href={"https://nodejs.org/download"}>Node.js</Link> installed on your system.
        Along with a React project to install into.
      </Text>
      <Text>
        To install run:
      </Text>
      <CommandPrompt
        content='npx fastdocs init'
      />
      <Text>If you didn't receive any error messages in your terminal that means FastDocs has been successfully installed into your project.</Text>
    </>
  ) 
}

export default Installation