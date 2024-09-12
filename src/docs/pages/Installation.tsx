import React from 'react'
import Title from '../ui/components/core/Title/Title'
import Navigator from '../ui/components/core/Navigator/Navigator'
import CommandPrompt from '../ui/components/core/CommandPrompt/CommandPrompt'
import Text from '../ui/components/core/Text/Text'
import Link from '../ui/components/core/Link/Link'

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
        <Navigator/>
    </div>
  )
}

export default Installation