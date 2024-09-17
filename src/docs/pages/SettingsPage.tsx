import React from 'react'
import Text from '../ui/components/core/Text/Text'
import Code from '../ui/components/core/Code/Code'
import Title from '../ui/components/core/Title/Title'

const SettingsPage = () => {
  return (
    <>
        <Text>The setting.ts file contains your documentation settings. This file is location in docs/settings.ts</Text>
        <Code code={
`const settings: any = {
    color: "#fff",
    productName: "",
    defaultPage: "",
    githubRepo: "",
    twitter: "",
    defaultDocsTitle: "",
    appendSearch: [],
    homePage: "/"
}`
        }/>
        <Text>This is how the settings.ts file looks like by default. There are 8 different settings you can change.</Text>
        <Title>Color</Title>
    </>
  )
}

export default SettingsPage