import { DocsProvider } from '@/docs/context/context'
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

export default DocsPage