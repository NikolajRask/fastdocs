/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Text, Code, Highlight } from '../../ui/components/core'

const NavigatorPage = () => {
  return (
    <>
      
      <Text>The </Text>      
      <Highlight>{"<Navigator/>"}</Highlight>      
      <Text> component is used to navigate between the different pages in the documentation. The navigator displays the previous and next page in the documentation and allows the user to easily navigate your documentationen without using the sidemenu.</Text>      
      <br/>      
      <br/>      
      <Text>The </Text>      
      <Highlight>{"<Navigator/>"}</Highlight>      
      <Text> component is a part of the default </Text>      
      <Highlight>{"layout.tsx"}</Highlight>      
      <Text> file which means that unless you want to change the layout of your pages, then you shouldn't worry about this component.</Text>      
      <br/>      
      <br/>      
      <Text>In case you want to use it differently than how it is used in </Text>      
      <Highlight>{"layout.tsx"}</Highlight>      
      <Text> then this is an example:</Text>      
      <br/>      
      <br/>      
      <Code code={`
import React from 'react'
import { Text, Navigator} from '../../ui/components/core'

const SomePage = () => {
  return (
    <>
		<Text>The content of this page<Text/>
		<Navigator/>
    </>
  ) 
}

export default SomePage
`}
      />
    </>
  ) 
}

export default NavigatorPage