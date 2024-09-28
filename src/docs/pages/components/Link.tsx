import { CodePreview, Highlight, Link, Text, Title } from '@/docs/ui/components/core'
import React from 'react'

const LinkPage = () => {
  return (
    <>
        <Text>The link component is used to create link between pages inside the documentation or to link to other websites.</Text>
        <CodePreview
            code={`import { Link } from '@/docs/ui/components/core'
import React from 'react'

const LinkPreview = () => {
  return (
    <>
        <Link page={"somepage"} openInNewWindow={true}>Go to other page</Link>
        <br/>
        <Link href="https://google.com" openInNewWindow={true}>Go to other website</Link>
    </>
  )
}

export default LinkPreview`}
        >
            <Link page={"somepage"} openInNewWindow={true}>Go to other page</Link>
            <br/>
            <Link href="https://google.com" openInNewWindow={true}>Go to google</Link>
        </CodePreview>
        <Title>Attributes</Title>
        <Text>
            <Highlight>href</Highlight>: The href attribute is used to link to an external website. (string)
            <br/>
            <br/>
            <Highlight>page</Highlight>: The page attribute is used to link to an internal page in the documentation. (string)
            <br/>
            <br/>
            <Highlight>color</Highlight>: Changes the color of the link. (string)
            <br/>
            <br/>
            <Highlight>openInNewWindow</Highlight>: Determines if the link opens the link in a new page or not. (boolean)
            <br/>
            <br/>
            <Highlight>withIcon</Highlight>: Determines if the link icon is shown or not. (string)
        </Text>
    </>
  )
}

export default LinkPage