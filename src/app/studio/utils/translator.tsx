import { Header, Text, Title, CommandPrompt, Highlight, Image } from "@/docs/ui/components/core"
import styles from '../styles.module.scss'
import { CodeBlock, irBlack } from 'react-code-blocks'
import React from "react"
import { useMemory } from "../project-manager/hooks/useMemory"
import { DataType } from "../project-manager/ProjectManager"

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

const regex = {
    bold: (text: string) => text.replace(/\*\*(.*?)\*\*/, '<b>$1</b>'),
    italic: (text: string) => text.replace(/(\*|_)(.*?)\1/g, '<i>$2</i>'),
    code: (text: string) => text.replace(/`(.*?)`/g, '<code>$1</code>'),
    link: (text: string) => text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),
    // mailOrLink: (text: string) => text.replace(/<(.*?)>/g, '<a href="$1">$1</a>'),
    image: (text: string) => text.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" />'),
    blockquote: (text: string) => text.replace(/^>\s*(.*)$/gm, '<blockquote>$1</blockquote>'),
    terminal: (text: string) => text.replace(/\/(.*?)\//g, '<CommandPrompt content="$1"/>'),
}

function ParseLine(line: string): React.ReactNode {

    let parsedLine = regex.terminal(regex.blockquote(regex.link(regex.image(regex.code(regex.italic(regex.bold(line)))))))

    return <span dangerouslySetInnerHTML={{ __html: parsedLine }} />
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
      return <blockquote key={index}>{part.slice(2).trim()}</blockquote>;
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
    // Match italic (*text*)
    else if (part.match(/\*(.*?)\*/)) {
      return <i key={index}>{part.slice(1, -1)}</i>;
    }
    // Match bold (**text**)
    else if (part.match(/\*\*(.*?)\*\*/)) {
      return <b key={index}>{" "}{part.slice(2, -2)}{" "}</b>;
    }
    // Match custom ==text== (highlighted text)
    else if (part.match(/==(.*?)==/)) {
      return <Highlight key={index}>{part.slice(2, -2)}</Highlight>;
    }
    // Return plain text if no match
    return part ? <React.Fragment key={index}>{part}</React.Fragment> : <></>;
  }).filter(Boolean); // Filter out any null values
};


const markdownToCode = (text: string): string[] => {
  // Split text into parts based on different Markdown elements and newline (\n)
  const parts = text.split(/(\*\*\*.*?\*\*\*|\*\*.*?\*\*|\*.*?\*|`[^`]+`|\[.*?\]\(.*?\)|!\[.*?\]\(.*?\)|^# .*$|^## .*$|^> .*|\/.*?\/|==.*?==|\n)/gm);

  // Map over the parts and transform them into JSX elements where applicable
  return parts.map((part, index) => {
    // Match newline (\n) and render <br />
    if (part.match(/`([^`]+)`/)) {
      return `<Code code=${"`"}${part.slice(1, -1)}${"`"}
      />`;
    }
    // Match images ![alt](url)
    else if (part.match(/!\[(.*?)\]\((.*?)\)/)) {
      const match = part.match(/!\[(.*?)\]\((.*?)\)/);
      if (match) {
        return `<Image src="{${match[2]}}" alt="{${match[1]}}" />`;
      }
    }
    // Match links [text](url)
    else if (part.match(/\[(.*?)\]\((.*?)\)/)) {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        return (
          `<Link href="{${match[2]}}">
            {${match[1]}}
          </Link>`
        );
      }
    }
    // Match blockquotes (> text)
    // else if (part.match(/^> (.*)$/m)) {
    //   return <blockquote key={index}>{part.slice(2).trim()}</blockquote>;
    // }
    // Match headers (## Heading 2)
    else if (part.match(/^## (.*)$/)) {
      return `<Header>${part.slice(3).trim()}</Header>`;
    }
    // Match headers (# Heading 1)
    else if (part.match(/^# (.*)$/)) {
      return `<Title>${part.slice(2).trim()}</Title>`;
    }
    // Match custom /text/ -> <p>text</p>
    else if (part.match(/\/(.*?)\//)) {
      return `<CommandPrompt content=${"`"}{${part.slice(1, -1)}}${"`"}/>`;
    }
    // Match bold and italic (***text***)
    else if (part.match(/\*\*\*(.*?)\*\*\*/)) {
      return `<b><i>${part.slice(3, -3)}</i></b>`;
    }
    // Match italic (*text*)
    else if (part.match(/\*(.*?)\*/)) {
      return `<i>${part.slice(1, -1)}</i>`;
    }
    // Match bold (**text**)
    else if (part.match(/\*\*(.*?)\*\*/)) {
      return `<b>${part.slice(2, -2)}</b>`;
    }
    // Match custom ==text== (highlighted text)
    else if (part.match(/==(.*?)==/)) {
      return `<Highlight>${part.slice(2, -2)}</Highlight>`;
    }
    // Return plain text if no match
    return part ? `${part}` : "";
  }).filter(Boolean); // Filter out any null values
};

export function TranslateCode(content: string, fileName: string): string {

  let name = findPageName(fileName)

  let code2 = ``

  const code = markdownToCode(content).map((x) => {return x})

  let lastItem: string | undefined = undefined

  code.forEach((x) => {

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

  return `import React from 'react'
import { CommandPrompt, Link, SEO, Text, Card, Code, CodePreview, Header, Highlight, Image, Title } from '../ui/components/core'

const ${name?.replaceAll(" ","")} = () => {
  return (
    <>
${code2}
    </>
  ) 
}

export default ${name?.replaceAll(" ","")}`
}


function  findPageName(fileName: string) {
  const projects = useMemory("projects") as DataType[]

  return projects.find((x) => x.pages.map((page) => page.id).includes(fileName))?.pages.find((page) => page.id == fileName)?.name
}