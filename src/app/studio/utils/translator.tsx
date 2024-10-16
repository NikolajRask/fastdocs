import { Text, CommandPrompt, Highlight, Image } from "@/docs/ui/components/core"
import styles from '../styles.module.scss'
import { CodeBlock, irBlack } from 'react-code-blocks'
import React from "react"
import { useMemory } from "../project-manager/hooks/useMemory"
import { DataType } from "../project-manager/ProjectManager"
import Blockquote from "@/docs/ui/components/core/Blockquote/Blockquote"

const CodeReplicate = ({
    code
}: {
    code: string
}) => {
    return (
        <CodeBlock
            customStyle={{
                borderRadius: "10px",
                fontFamily: "monospace",
                marginBottom: "10px",
                fontStyle: "normal"
            }}
            text={code.trim()}
            language='typescript'
            showLineNumbers={true}
            theme={irBlack}
        />
    )
}

export function Markdown(text: string): React.ReactNode {
    return (
        <div>
            {
                markdownToJsx(text)
            }
        </div>
    )
}

const markdownToJsx = (text: string): (string | JSX.Element)[] => {
  // Split text into parts based on different Markdown elements and newline (\n)
  const parts = text.split(/(\*\*\*.*?\*\*\*|\*\*.*?\*\*|\*.*?\*|`[^`]+`|\[.*?\]\(.*?\)|!\[.*?\]\(.*?\)|^# .*$|^## .*$|^> .*|\/.*?\/|==.*?==|\n)/gm);

  // Map over the parts and transform them into JSX elements where applicable
  return parts.map((part, index) => {
    // Match newline (\n) and render <br />
    if (part === '\n') {
      return <br key={index} />;
    }
    // Match inline code (`code`)
    else if (part.match(/`([^`]+)`/)) {
      return <CodeReplicate key={index} code={part.slice(1, -1)}/>;
    }
    // Match images ![alt](url)
    else if (part.match(/!\[(.*?)\]\((.*?)\)/)) {
      const match = part.match(/!\[(.*?)\]\((.*?)\)/);
      if (match) {
        return <Image key={index} src={match[2]} alt={match[1]} />;
      }
    }
    // Match links [text](url)
    else if (part.match(/\[(.*?)\]\((.*?)\)/)) {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        return (
          <a key={index} href={match[2]} target="_blank" rel="noopener noreferrer">
            {match[1]}
          </a>
        );
      }
    }
    // Match blockquotes (> text)
    else if (part.match(/^> (.*)$/m)) {
      return <Blockquote key={index}>{part.slice(2).trim()}</Blockquote>;
    }
    // Match headers (## Heading 2)
    else if (part.match(/^## (.*)$/)) {
      return <h2 className={styles.title} key={index}>{part.slice(3).trim()}</h2>;
    }
    // Match headers (# Heading 1)
    else if (part.match(/^# (.*)$/)) {
      return <h1 className={styles.header} key={index}>{part.slice(2).trim()}</h1>;
    }
    // Match custom /text/ -> <p>text</p>
    else if (part.match(/\/(.*?)\//)) {
      return <CommandPrompt key={index} content={part.slice(1, -1)}/>;
    }
    // Match bold and italic (***text***)
    else if (part.match(/\*\*\*(.*?)\*\*\*/)) {
      return <b key={index}><i>{part.slice(3, -3)}</i></b>;
    }
    // Match bold (**text**)
    else if (part.match(/\*\*(.*?)\*\*/)) {
      return <b key={index}>{" "}{part.slice(2, -2)}{" "}</b>;
    }
    // Match italic (*text*)
    else if (part.match(/\*(.*?)\*/)) {
      return <i key={index}>{part.slice(1, -1)}</i>;
    }
    // Match custom ==text== (highlighted text)
    else if (part.match(/==(.*?)==/)) {
      return <Highlight key={index}>{part.slice(2, -2)}</Highlight>;
    }
    // Return plain text if no match
    return part ? <Text>{part}</Text> : <></>;
  }).filter(Boolean); // Filter out any null values
};


const markdownToCode = (text: string): [string[], string[]] => {
  // Split text into parts based on different Markdown elements and newline (\n)
  const parts = text.split(/(\*\*\*.*?\*\*\*|\*\*.*?\*\*|\*.*?\*|`[^`]+`|\[.*?\]\(.*?\)|!\[.*?\]\(.*?\)|^# .*$|^## .*$|^> .*|\/.*?\/|==.*?==|\n)/gm);

  const usedComponents:string[] = []

  // Map over the parts and transform them into JSX elements where applicable
  const code = parts.map((part) => {
    // Match newline (\n) and render <br />
    if (part === '\n') {
      return "\n      <br/>";
    }
    if (part.match(/`([^`]+)`/)) {
      usedComponents.push("Code")
      return `\n      <Code code={${"`"}${part.slice(1, -1)}${"`"}}
      />`;
    }
    // Match images ![alt](url)
    else if (part.match(/!\[(.*?)\]\((.*?)\)/)) {
      const match = part.match(/!\[(.*?)\]\((.*?)\)/);
      if (match) {
        usedComponents.push("Image")
        return `\n      <Image src="${match[2]}" alt="${match[1]}" />`;
      }
    }
    // Match links [text](url)
    else if (part.match(/\[(.*?)\]\((.*?)\)/)) {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        usedComponents.push("Link")
        return (
          `\n      <Link href="${match[2]}">
            ${match[1]}
          </Link>`
        );
      }
    }
    // Match blockquotes (> text)
    else if (part.match(/^> (.*)$/m)) {
      usedComponents.push("Blockquote")
      return `\n      <Blockquote>${part.slice(2).trim()}</Blockquote>`;
    }
    // Match headers (## Heading 2)
    else if (part.match(/^## (.*)$/)) {
      usedComponents.push("Title")
      return `\n      <Title>${part.slice(3).trim()}</Title>`;
    }
    // Match headers (# Heading 1)
    else if (part.match(/^# (.*)$/)) {
      usedComponents.push("Header")
      return `\n      <Header>${part.slice(2).trim()}</Header>`;
    }
    // Match custom /text/ -> <p>text</p>
    else if (part.match(/\/(.*?)\//)) {
      usedComponents.push("CommandPrompt")
      return `\n      <CommandPrompt content={${"`"}${part.slice(1, -1)}${"`"}}/>`;
    }
    // Match bold and italic (***text***)
    else if (part.match(/\*\*\*(.*?)\*\*\*/)) {
      return `\n      <b><i>${part.slice(3, -3)}</i></b>`;
    }
      // Match bold (**text**)
      else if (part.match(/\*\*(.*?)\*\*/)) {
        return `\n      <b>${part.slice(2, -2)}</b>`;
      }
    // Match italic (*text*)
    else if (part.match(/\*(.*?)\*/)) {
      return `\n      <i>${part.slice(1, -1)}</i>`;
    }
    // Match custom ==text== (highlighted text)
    else if (part.match(/==(.*?)==/)) {
      usedComponents.push("Highlight")
      return `\n      <Highlight>{"${part.slice(2, -2)}"}</Highlight>`;
    }
    // Return plain text if no match
    usedComponents.push("Text")
    return part ? `\n      <Text>${part}</Text>` : "";
  }).filter(Boolean); // Filter out any null values

  const usedComponentsUnique = Array.from(new Set(usedComponents))

  return [code, usedComponentsUnique]
};
    
export function TranslateCode(content: string,  pageName: string): string {

  let code2 = ``

  const [code, usedComponents] = markdownToCode(content)

  let lastItem: string | undefined = undefined

  code.map((x) => {return `${x}`}).forEach((x) => {

    let skip = false

    if (lastItem != undefined) {
      if (lastItem == "\n") {
        if (x == "\n") {
          skip = true
        }
      }
    }

    lastItem = x

    if (!skip) {
    code2 += `      ${x}`
    }
  })

  return `/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import { ${usedComponents.join(", ")} } from '../ui/components/core'

const ${pageName?.replaceAll(" ","")} = () => {
  return (
    <>
${code2}
    </>
  ) 
}

export default ${pageName?.replaceAll(" ","")}`
}


export function  findPageName(fileName: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const projects = useMemory("projects") as DataType[]

  return projects.find((x) => x.pages.map((page) => page.id).includes(fileName))?.pages.find((page) => page.id == fileName)?.name
}