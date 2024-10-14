/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import { Text, Code, Highlight, Title } from '../../ui/components/core'

const SearchPage = () => {
  return (
    <>
      
      <Title>How search works</Title>           
      <Text>The Search function is a fast way for your users to find  whatever page they are looking for very quickly. In Docsfast when creating pages, the pages automatically gets added to the search in the Navbar where the user can search for all pages. </Text>      
      <br/>      
      <br/>      
      <Title>Search Append</Title>            
      <Text>In </Text>      
      <Highlight>{"utils/settings/settings.tsx"}</Highlight>      
      <Text> file, you can specify the </Text>      
      <Highlight>{"appendSearch"}</Highlight>      
      <Text> property which adds some extra elements to your search results. This can be used to link to other urls, link to functions such as changing themes and more.</Text>      
      <br/>      
      <br/>      
      <Text>This is an example of how the appendSearch could look like.</Text>      
      <br/>      
      <br/>      
      <Code code={`appendSearch: [
        {
            label: "Dark Mode",
            action: () => {
                useTheme("dark")
            },
            icon: <MoonIcon/>
        },
        {
            label: "Light Mode",
            action: () => {
                useTheme("light")
            },
            icon: <SunIcon/>
        },
        {
            label: "System Mode",
            action: () => {
                useTheme("system")
            },
            icon: <GearIcon/>
        }
]`}
      />      
      <br/>      
      <Title>Syntax</Title>           
      <Text>The </Text>      
      <Highlight>{"appendSearch"}</Highlight>      
      <Text> takes in an array of objects looking like this</Text>      
      <br/>      
      <Text> </Text>      
      <br/>      
      <Code code={`
{
	label: string,
    action: () => void
    icon: React.ReactNode
},
`}
      />
    </>
  ) 
}

export default SearchPage