/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import { Text, Highlight, Title, Link, } from '../../ui/components/core'

const NavigatingPage = () => {
  return (
    <>
      
      <Text>In Docsast we handle the navigation between pages for you. There are many different ways that a user can navigate documentation with Docsfast. Some of these methods are native and requires no extra code and some needs to be implemented.</Text>      
      <br/>      
      <br/>      
      <Title>Side Menu</Title>          
      <Text>In the side menu the user can navigate between all the different pages and sections in the entire documentation very quickly. This happens natively when creating new pages.</Text>      
      <br/>      
      <br/>      
      <Title>Search</Title>          
      <Text>The user can use the search bar to search for pages and navigate to them. This is also native and can be useful if you are writing documentation that has many pages so the side bar becomes hard to use.</Text>      
      <br/>      
      <br/>      
      <Title>Table of Content</Title>         
      <Text>The table of content is used to navigate inside of a page that has many different headlines and content. This can be implemented by using the </Text>      
      <Highlight>{"withTableOfContent"}</Highlight>      
      <Text> on the </Text>      
      <Highlight>{"<Page/>"}</Highlight>      
      <Text> component and having it set to </Text>      
      <Highlight>{"true"}</Highlight>      
      <Text>. This is useful for navigating long pages with ease.</Text>      
      <br/>      
      <br/>      
      <Title>Links</Title>            
      <Text>The lasts option for navigation between pages and to other websites it by using the </Text>      
      <Highlight>{"<Link/>"}</Highlight>      
      <Text> component. With the </Text>      
      <Highlight>{"<Link/>"}</Highlight>      
      <Text> component you can point the user to a different page in your documentation. This needs to be manually implemented and you can read how to <Link page="Link">Here</Link></Text>
    </>
  ) 
}

export default NavigatingPage