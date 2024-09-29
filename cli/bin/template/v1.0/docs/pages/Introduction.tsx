import React from 'react'
import { Code, Link, SEO, Text, Title } from '../ui/components/core'
import useSettings from '../utils/settings/use-settings'

const Introduction = () => {
  return (
    <>
      <SEO
        title={"Introduction - Fastdocs"}
      />
      <Text>
        FastDocs is framework / boilerplate for writing Documentation that is easy to access. Unlike other alternatives FastDocs allows you to write the documentation directly into your codebase and does not rely on any third parties.
        Unlike other alternatives FastDocs is also open-source and gets downloaded directly into your project which means that everything is custmoziable down to the last line of code. So if there is something that you don't like you 
        can always change it.
      </Text>
      <Text>FastDocs is intended to be used with Next.js, but it can also be used with other React frameworks such as Vite, create-react-app or default react, but this documentation will primaraly follow the practices of Next.js</Text>
      <Title>Features</Title>
      <Text>FastDocs comes with many plug-and-play features such as navigation, search, themes, and many components.</Text>
      <Title>Support Us</Title>
      <Text>
        If you find this project helpfull, feel free to star us on{" "}
        <Link
          openInNewWindow={true}
          href={useSettings().githubRepo}
        >
          Github
        </Link>
      </Text>
    </>
  )
}

export default Introduction