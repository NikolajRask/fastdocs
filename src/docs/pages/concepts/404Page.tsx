/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import { Text, Highlight } from '../../ui/components/core'

const Page404 = () => {
  return (
    <>
      
      <Text>In the </Text>      
      <Highlight>{"ui/components/404"}</Highlight>      
      <Text> folder the 404 page is placed and it is used to when the user tries to access a page that doesn't exists. So for example if you have 2 pages </Text>      
      <Highlight>{"Page1"}</Highlight>      
      <Text> and </Text>      
      <Highlight>{"Page2"}</Highlight>      
      <Text> . And a user tries to access Page3. This 404 components will appear instead. The 404 page component can be customized however you like. In order to use the 404 page you also need to provide a specific url to the 404 page so that Fastdocs can recognize it as the 404 page. In </Text>      
      <Highlight>{"settings.ts"}</Highlight>      
      <Text> this is called </Text>      
      <Highlight>{"missingPage"}</Highlight>      
      <Text> and by default has the value of "404.page". The name of this setting can't be the same as any of your pages.</Text>
    </>
  ) 
}

export default Page404