/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import { Text, Highlight, Image, CodePreview, Header} from '../../ui/components/core'

const ImagePage = () => {
  return (
    <>
      
      <Text>The </Text>      
      <Highlight>{"<Image/>"}</Highlight>      
      <Text> component is used to add images to your documentation. </Text>      
      <br/>      
      <br/>      
      <Text>This is how an </Text>      
      <Highlight>{"<Image/>"}</Highlight>      
      <Text> component looks</Text>      
      <br/>      
      <br/>      
      <Image src="https://picsum.photos/607/400" alt="An Image" />      
      <br/>      
      <br/>      
      <Text>Example of how to use the </Text>      
      <Highlight>{"<Image/>"}</Highlight>      
      <Text> component </Text>      
      <br/>      
      <br/>      
      <CodePreview code={`
import React from 'react'
import { Text, Header, Image } from '../ui/components/core'

const SomePage = () => {
  return (
    <>
		<Header
			title={"This is a header"}
		/>
		<Text>This is a text</Text>
		<Image
			src={"https://picsum.photos/607/400"}
			width={607}
			height={400}
			alt="An Image"
		/>
    </>
  ) 
}

export default SomePage
`}
        
      >
            <Header
                title={"This is a header"}
            />
            <Text>This is a text</Text>
            <Image
                src={"https://picsum.photos/607/400"}
                width={607}
                height={400}
                alt="An Image"
            />    
        </CodePreview>   
      <br/>      
      <br/>      
      <Text>The </Text>      
      <Highlight>{"<Image/>"}</Highlight>      
      <Text> component can take in 4 attributes</Text>      
      <br/>      
      <br/>      
      <Highlight>{"src"}</Highlight>      
      <Text>: The source of the image.</Text>      
      <br/>      
      <Highlight>{"alt"}</Highlight>      
      <Text>: The alternative text to display if image can't be displayed.</Text>      
      <br/>      
      <Highlight>{"width?"}</Highlight>      
      <Text>: The width of the image. Supports both numbers and CSS units.</Text>      
      <br/>      
      <Highlight>{"height"}</Highlight>      
      <Text>=: The height of the image. Supports both numbers and CSS units.</Text>
    </>
  ) 
}

export default ImagePage