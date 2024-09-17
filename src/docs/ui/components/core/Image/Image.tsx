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
}: ImageProps) => {
  return (
    <img
        width={width}
        height={height}
        src={src}
        alt={alt}
    />
  )
}

export default Image