import React from 'react'

type HorizontalLineProps = {
  margin?: string
}

//función para crear una línea horizontal
export default function HorizontalLine({ margin }: HorizontalLineProps) {
  return (
    <hr className={`mx-auto h-px w-10/12 bg-pink-500 ${margin || 'my-4'}`} />
  )
}
