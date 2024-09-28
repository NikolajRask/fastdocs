import React from 'react'

interface CardAdProps {
  onClick?: () => void;
  children: React.ReactNode
}

const CardAd = ({
  onClick,
  children
}: CardAdProps) => {
  return (
    <div
      style={{
        border: "1px solid var(--border-color)",
        borderRadius: 10,
        padding: 10,
        maxWidth: 310,
        maxHeight: 500,
        cursor: "pointer",
        marginTop: 30,
        background: "rgb(33,33,33)",
      }}
    >
      <p style={{
        color: "rgb(200,200,200)",
        position: "absolute",
        fontSize: 11,
        marginLeft: 0,
      }}>Ad</p>
      {children}
    </div>
  )
}

export default CardAd