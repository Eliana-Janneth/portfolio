import React from 'react'

type TextProps = {
  classText?: string
  children: React.ReactNode
}

//función para crear un texto
export default function Text({ classText, children }: TextProps) {
  return (
    <p
      className={`text-sm font-normal ${classText ? classText : 'text-justify text-black'}`}
    >
      {children}
    </p>
  )
}
