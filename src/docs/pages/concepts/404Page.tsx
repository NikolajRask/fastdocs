import React from 'react'
import { CommandPrompt, Link, SEO, Text, Card, Code, CodePreview, Header, Highlight, Image, Title } from '../../ui/components/core'

const Page404 = () => {
  return (
    <>
      <Header>404</Header>      
      In the       <Highlight>ui\components\404</Highlight>       folder the 404 page is placed and it is used to when the user tries to access a page that doesn't exists. So for example if you have 2 pages       <Highlight>Page1</Highlight>       and       <Highlight>Page2</Highlight>      . And a user tries to access Page3. This 404 components will appear instead. The 404 page component can be customized however you like.      
      In order to use the 404 page you also need to provide a specific url to the 404 page so that Fastdocs can recognize it as the 404 page. In settings.ts this is called       <Highlight>missingPage</Highlight>       and by default has the value of "404.page". The name of this setting can't be the same as any of your pages.
    </>
  ) 
}

export default Page404