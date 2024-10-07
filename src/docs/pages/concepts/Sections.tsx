import React from 'react'
import { CommandPrompt, Link, SEO, Text, Card, Code, CodePreview, Header, Highlight, Image, Title, Blockquote } from '../../ui/components/core'

const SectionPage = () => {
  return (
    <>
      
      A section is used to group a bunch of pages together and make them more comprehensible. For example if you have ten pages that all have to do with explaining how your products API works, then you can wrap all of these pages into a section and call it       
      <Highlight>{"API"}</Highlight>      
      . To create a section the       
      <Highlight>{"<Section/>"}</Highlight>      
       components is used.      
      <br/>      
      <br/>      
      This is how you can do it using the previous example:      
      <br/>      
      <Code code={`import { DocsProvider } from '@/docs/context/context'
import Docs from '@/docs/ui/components/Docs/Docs'
import Page from '@/docs/ui/components/Page/Page'
import Section from "@/docs/ui/components/Section/Section";
import React from 'react'

const DocsPage = () => {
  return (
    <DocsProvider>
        <Docs>
            <Page title="Get Started">
              <p>Get started Page</p>
            </Page>
            <Section name={'API'}>
              <Page title="API 1">
                <p>API 1 page</p>
              </Page>
              <Page title="API 2">
                <p>API 2 page</p>
              </Page>
            </Section>
        </Docs>
    </DocsProvider>
  )
}

export default DocsPage`}
      />      
      <br/>      
      Using the code from this example you will get 3 pages where the first in not in a section, and the two pages       
      <Highlight>{"API 1"}</Highlight>      
       and       
      <Highlight>{"API 2"}</Highlight>      
       is in the same section       
      <Highlight>{"API"}</Highlight>      
      .      
      <br/>      
      <br/>      
      This will make the two API pages render in a section together in the sidebar.
    </>
  ) 
}

export default SectionPage