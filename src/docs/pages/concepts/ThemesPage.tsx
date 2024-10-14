/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import { Text, Code, Highlight, Title} from '../../ui/components/core'

const ThemesPage = () => {
  return (
    <>
      
      <Title>How to use themes?</Title>           
      <Text>In Docsfast </Text>      
      <Highlight>{"themes"}</Highlight>      
      <Text> are supported out of the box and all you have to do to use theme is to the </Text>      
      <Highlight>{"<Docs/>"}</Highlight>      
      <Text> component and copy and paste this CSS code into your global CSS file.</Text>      
      <br/>      
      <br/>      
      <Code code={`
:root {
  --background-color: #ffffff;
  --text-color: #000000;
  --border-color: rgb(226, 226, 226);
  --border-color-subdued: rgb(192, 192, 192);
  --hover-color: rgba(0,0,0,0.1);
  --reverse-hover:rgb(61, 61, 61);
  --background-subdued: rgb(241, 241, 241);
  --scroll-base: #c0c0c0;
  --scroll-hover: #b1b1b1;
  --scroll-active: #a3a3a3;
  --text-hover: rgb(56, 56, 56);
}

[data-theme='dark'] {
  --background-color: #121212;
  --text-color: #f5f5f5;
  --border-color: rgb(26, 26, 26);
  --border-color-subdued: rgb(49, 49, 49);
  --hover-color: rgba(255,255,255,0.1);
  --reverse-hover: #d8d8d8;
  --background-subdued: rgb(32, 32, 32);
  --scroll-base: #313131;
  --scroll-hover: #333333;
  --scroll-active: #222222;
  --text-hover: rgb(199, 199, 199);
}
`}
      />      
      <br/>      
      <Title>Themes</Title>           
      <Text>There are 3 themes supported, </Text>      
      <Highlight>{"light"}</Highlight>      
      <Text>, </Text>      
      <Highlight>{"dark"}</Highlight>      
      <Text> and </Text>      
      <Highlight>{"system"}</Highlight>      
      <Text> which changes to the system preference.</Text>      
      <br/>      
      <br/>      
      <Title>Customization</Title>            
      <Text>If you want to integrate Docsfast theming with your own custom theming that you use else where in your application. Then you can easily edit </Text>      
      <Highlight>{"utils/use-theme.ts"}</Highlight>      
      <Text> and apply your own logic to the theming handling.</Text>
    </>
  ) 
}

export default ThemesPage