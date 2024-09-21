import React from 'react'
import Title from '../ui/components/core/Title/Title'
import Navigator from '../ui/components/core/Navigator/Navigator'
import CommandPrompt from '../ui/components/core/CommandPrompt/CommandPrompt'
import Text from '../ui/components/core/Text/Text'
import Link from '../ui/components/core/Link/Link'
import Code from '../ui/components/core/Code/Code'
import Grid from '../ui/components/core/Grid/Grid'
import Card from '../ui/components/core/Card/Card'
import Breadcrumb from '../ui/components/core/Breadcrumb/Breadcrumb'
import CodePreview from '../ui/components/core/CodePreview/CodePreview'
import Highlight from '../ui/components/core/Highlight/Highlight'

const Installation = () => {
  return (
    <>  
        <Text>
          <Link page={"Installation"}>Next</Link>
        </Text>
        <CommandPrompt
          content="npx create-next-app@latest"
        />
        <Text>Use this code</Text>
        <Code
          file="main.ts"
          code={`
function x() {
  console.log("e")
}
            `}
        />
        <Grid>
          <Card>
            Test
          </Card>
          <Card>
            Test
          </Card>
          <Card>
            Test
          </Card>
          <Card>
            Test
          </Card>
        </Grid>
        <CodePreview
          preview={
            <p>Hello World</p>
          }
          code={`
function x() {
  console.log("e")
}`}
        />
                <Grid>
          <Card>
            Test
          </Card>
          <Card>
            Test
          </Card>
          <Card>
            Test
          </Card>
          <Card>
            Test
          </Card>
        </Grid>
        <Grid>
          <Card>
            Test
          </Card>
          <Card>
            Test
          </Card>
          <Card>
            Test
          </Card>
          <Card>
            Test
          </Card>
        </Grid>
        <Grid>
          <Card>
            Test
          </Card>
          <Card>
            Test
          </Card>
          <Card>
            Test
          </Card>
          <Card>
            Test
          </Card>
        </Grid>
        <Grid>
          <Card>
            Test
          </Card>
          <Card>
            Test
          </Card>
          <Card>
            Test
          </Card>
          <Card>
            Test
          </Card>
        </Grid>
        <Grid>
          <Card>
            Test
          </Card>
          <Card>
            Test
          </Card>
          <Card>
            Test
          </Card>
          <Card>
            Test
          </Card>
        </Grid>
    </>
  )
}

export default Installation