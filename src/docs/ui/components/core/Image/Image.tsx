import React from 'react'

interface ImageProps {
    width: string | number;
    height: string | number;
    src: string;
    alt: string
}

const Image = ({
    width,
    height,
    src,
    alt,
    ...rest
}: React.HTMLAttributes<HTMLDivElement> & ImageProps) => {
  return (
    <img
        width={width}
        height={height}
        src={src}
        alt={alt}
        {...rest}
    />
  )
}

export default Image