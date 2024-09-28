import React from 'react'

interface SEOProps {
    title?: string,
    description?: string,
    utf8?: boolean;
    keywords?: string,
    author?: string,
    robots?: string,
    viewport?: string,
}

const SEO = ({
    title,
    description,
    utf8,
    keywords,
    author,
    robots,
    viewport
}: SEOProps) => {
  return (
    <head>
        {
            title && <title>{title}</title>
        }
        {
            utf8 && <meta charSet="UTF-8"/>
        }
        {
            description && <meta name="description" content={description}/>
        }
        {
            keywords && <meta name="keywords" content={keywords}/>
        }
        {
            author && <meta name="author" content={author}/>
        }
        {
            robots && <meta name="robots" content={robots}/>
        }
        {
            viewport && <meta name="viewport" content={viewport}/>
        }
    </head>
  )
}

export default SEO