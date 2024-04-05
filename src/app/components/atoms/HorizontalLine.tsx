import React from 'react'

type HorizontalLineProps = {
  margin?: string
}

export default function HorizontalLine({ margin }: HorizontalLineProps) {
  return (
    <hr className={`mx-auto h-px w-10/12 bg-teal-500 ${margin || 'my-4'}`} />
  )
}
