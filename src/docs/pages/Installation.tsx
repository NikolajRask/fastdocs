import React from 'react'
import Title from '../ui/components/core/Title/Title'
import Navigator from '../ui/components/core/Navigator/Navigator'
import CommandPrompt from '../ui/components/core/CommandPrompt/CommandPrompt'
import Text from '../ui/components/core/Text/Text'
import Link from '../ui/components/core/Link/Link'
import Code from '../ui/components/core/Code/Code'

const Installation = () => {
  return (
    <div>
        <Title>Test</Title>
        <Text>

          Use this command to install Next.js'
          <Link page={"Test"}>Next</Link>
        </Text>
        <CommandPrompt
          content="npx create-next-app@latest"
        />
        <Text>Use this code</Text>
        <Code
          code={`
function x() {
  console.log("e")
}
            `}
        />
        <Navigator/>
    </div>
  )
}

export default Installation