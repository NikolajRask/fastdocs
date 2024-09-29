import * as React from "react"
const LinkIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1}
      d="M8 8H6a4 4 0 1 0 0 8h2m8-8h2a4 4 0 0 1 0 8h-2m-8-4h8"
    />
  </svg>
)
export default LinkIcon