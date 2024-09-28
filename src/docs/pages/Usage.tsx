import React from 'react'
import { Code, CommandPrompt, Highlight, SEO, Text, Title } from '../ui/components/core'

const Usage = () => {
  return (
    <>
        <SEO
            title={"Usage - Fastdocs"}
        />
        <Text>
            After installing into your project you will see a <Highlight>Docs</Highlight> folder where all the things you will need is located.
            Inside the Docs folder there is 4 other folders located. <Highlight>context</Highlight>, <Highlight>pages</Highlight>, <Highlight>ui</Highlight> and <Highlight>utils</Highlight>.
            <br/>
        </Text>
        <Text>
            Unless you want to customize something the only folder you need to use is the <Highlight>pages</Highlight> folder
        </Text>
        <Title>
            Pages
        </Title>
        <Text>
            The pages folder is intented to be used to store the pages of the documentation. A page is essentially just a React component so if you want to store you pages in another page you can also do that.
        </Text>
        <Title>Context, UI and Utils</Title>
        <Text>Located inside the rest of the folders is the source code that makes FastDocs work, components and helper functions. If you want to change something in your version of FastDocs then this can be done in here. If you mess something up you can also use the command.</Text>
        <CommandPrompt
            content={"npx fastdocs reset"}
        />
        <Text>To reset the source code. (this will not reset your pages folder)</Text>
        <Title>
            How do create documentation?
        </Title>
        <Text>To get started with creating documentation you need to use the <Highlight>Docs</Highlight> component.
            To create documentation under the url <Highlight>localhost:3000/docs</Highlight>. Then create a page using your router at /docs and then create a <Highlight>Docs</Highlight>
        </Text>
        <Code
            file={"page.tsx"}
            code={`import { DocsProvider } from '@/docs/context/context'
import Docs from '@/docs/ui/components/Docs/Docs'
import Page from '@/docs/ui/components/Page/Page'
import React from 'react'

const DocsPage = () => {
  return (
    <DocsProvider>
        <Docs>
            <Page title={"Getting Started"}>
                <p>This is my first documentation page</p>
            </Page>
        </Docs>
    </DocsProvider>
  )
}

export default DocsPage`}
        /> 
        <Text>The Docs component needs to be wrapped by the DocsProvider component. The Docs components automaticly created the Navbar and Sidebar. The Page component is used for creating pages. Read more about pages on the next page.</Text>
    </>
  )
}

export default Usage