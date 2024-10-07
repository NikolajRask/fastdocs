import { DocsProvider } from '@/docs/context/context'
import Docs from '@/docs/ui/components/Docs/Docs'
import Page from '@/docs/ui/components/Page/Page'
import Section from '@/docs/ui/components/Section/Section'
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

export default DocsPage