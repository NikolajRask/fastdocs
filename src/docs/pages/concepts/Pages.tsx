import React from 'react'
import { CommandPrompt, Link, SEO, Text, Card, Code, CodePreview, Header, Highlight, Image, Title, Blockquote } from '../../ui/components/core'

const PagesPage = () => {
  return (
    <>
      
      To create a page inside of your documentation you use the       
      <Highlight>{"<Page/>"}</Highlight>      
       component inside your       
      <Highlight>{"<Docs/>"}</Highlight>      
       component.       
      <br/>      
      <br/>      
      <Title>Page component</Title>      
      <br/>      
      The page component has 3 arguments:      
      <br/>      
      The       
      <Highlight>{"children"}</Highlight>      
       is what the page is rendering, the       
      <Highlight>{"title"}</Highlight>      
       is what the title of the page is and the       
      <Highlight>{"withTableOfContent?"}</Highlight>      
       is a boolean that decides whether or not the table of content is shown.      
      <br/>      
      <br/>      
      This is an example of how do create a page:      
      <br/>      
      <Code code={`import { DocsProvider } from '@/docs/context/context'
import Docs from '@/docs/ui/components/Docs/Docs'
import Page from '@/docs/ui/components/Page/Page'
import React from 'react'

const DocsPage = () => {
  return (
    <DocsProvider>
        <Docs>
            <Page title={"First page"}>
                <p>This is my first documentation page</p>
            </Page>
            <Page title={"Second page"} withTableOfContent={true}>
                <p>This is my second documentation page</p>
            </Page>
        </Docs>
    </DocsProvider>
  )
}

export default DocsPage`}
      />      
      <br/>      
      This will create two pages where the first doesn't have a table of content and the second one does.      
      <br/>      
      <br/>      
      <Blockquote>Note: The page component will automatically take care of the sidebar, rendering, and searching in pages.</Blockquote>
    </>
  ) 
}

export default PagesPage