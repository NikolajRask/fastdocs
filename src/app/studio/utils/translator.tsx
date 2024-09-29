import { Header, Text, Title, CommandPrompt, Highlight } from "@/docs/ui/components/core"
import styles from '../styles.module.scss'
import { CodeBlock, irBlack } from 'react-code-blocks'
import React from "react"

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

export function Markdown(text: string) {
    const lines = text.split("\n").filter(x => x != '')

    return (
        <>
            {
                markdownToJsx(text)
            }
        </>
    )
}


// const markdownToJsx = (text: string): (string | JSX.Element)[] => {


//     const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`[^`]+`|\[.*?\]\(.*?\)|!\[.*?\]\(.*?\)|^# .*$|^## .*$|^> .*|\/.*?\/)/gm);
  
//     // Map over the parts and transform them into JSX elements where applicable
//     return parts.map((part, index) => {
//       // Match bold (**text**)
//       if (part.match(/\*\*(.*?)\*\*/)) {
//         return <b key={index}>{part.slice(2, -2)}</b>;
//       }
//       // Match italic (*text*)
//       else if (part.match(/\*(.*?)\*/)) {
//         return <i key={index}>{part.slice(1, -1)}</i>;
//       }
//       // Match inline code (`code`)
//       else if (part.match(/`([^`]+)`/)) {
//         return <CodeReplicate code={part.slice(1, -1)}/>;
//       }
//       // Match links [text](url)
//       else if (part.match(/\[(.*?)\]\((.*?)\)/)) {
//         const match = part.match(/\[(.*?)\]\((.*?)\)/);
//         if (match) {
//           return (
//             <a key={index} href={match[2]} target="_blank" rel="noopener noreferrer">
//               {match[1]}
//             </a>
//           );
//         }
//       }
//       // Match images ![alt](url)
//       else if (part.match(/!\[(.*?)\]\((.*?)\)/)) {
//         const match = part.match(/!\[(.*?)\]\((.*?)\)/);
//         if (match) {
//           return <img key={index} src={match[2]} alt={match[1]} />;
//         }
//       }
//       // Match blockquotes (> text)
//       else if (part.match(/^> (.*)$/m)) {
//         return <blockquote key={index}>{part.slice(2).trim()}</blockquote>;
//       }
//       // Match headers (## Heading 2)
//       else if (part.match(/^## (.*)$/)) {
//         return <h2 key={index}>{part.slice(3).trim()}</h2>;
//       }
//       // Match headers (# Heading 1)
//       else if (part.match(/^# (.*)$/)) {
//         return <h1 key={index}>{part.slice(2).trim()}</h1>;
//       }
//       // Match custom /text/ -> <p>text</p>
//       else if (part.match(/\/(.*?)\//)) {
//         return <CommandPrompt key={index} content={part.slice(1, -1)}/>;
//       }
//       // Return plain text if no match, adding line breaks for new lines
//       return part.trim() ? <React.Fragment key={index}>{part.trim()}</React.Fragment> : <></>;
//     }).filter(Boolean); // Filter out any null values
//   };

const markdownToJsx = (text: string): (string | JSX.Element)[] => {
    // Split text into parts based on different Markdown elements
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`[^`]+`|\[.*?\]\(.*?\)|!\[.*?\]\(.*?\)|^# .*$|^## .*$|^> .*|\/.*?\/)/gm);
  
    // Map over the parts and transform them into JSX elements where applicable
    return parts.map((part, index) => {
      // Match bold (**text**)
      if (part.match(/\*\*(.*?)\*\*/)) {
        return <b key={index}>{" "}{part.slice(2, -2)}{" "}</b>;
      }
      // Match italic (*text*)
      else if (part.match(/\*(.*?)\*/)) {
        return <i key={index}>{part.slice(1, -1)}</i>;
      }
      // Match inline code (`code`)
      else if (part.match(/`([^`]+)`/)) {
        return <CodeReplicate code={part.slice(1, -1)}/>;
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
      // Match images ![alt](url)
      else if (part.match(/!\[(.*?)\]\((.*?)\)/)) {
        const match = part.match(/!\[(.*?)\]\((.*?)\)/);
        if (match) {
          return <img key={index} src={match[2]} alt={match[1]} />;
        }
      }
      // Match blockquotes (> text)
      else if (part.match(/^> (.*)$/m)) {
        return <blockquote key={index}>{part.slice(2).trim()}</blockquote>;
      }
      // Match headers (## Heading 2)
      else if (part.match(/^## (.*)$/)) {
        return <h2 key={index}>{part.slice(3).trim()}</h2>;
      }
      // Match headers (# Heading 1)
      else if (part.match(/^# (.*)$/)) {
        return <h1 key={index}>{part.slice(2).trim()}</h1>;
      }
      // Match custom /text/ -> <p>text</p>
      else if (part.match(/\/(.*?)\//)) {
        return <CommandPrompt key={index} content={part.slice(1, -1)}/>;
      }
      else if (part.match(/@(.*?)@/)) {
        return <b>{part.slice(1, -1).trim()}</b>;
      }
      // Return plain text if no match, adding line breaks for new lines
      return part.trim() ? part.trim() : <></>;
    }).filter(Boolean); // Filter out any null values
};


