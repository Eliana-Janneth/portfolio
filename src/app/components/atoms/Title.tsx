import React from 'react'

type TitleProps = {
  children: React.ReactNode
  size?: string
  classTitle?: string
}

export default function Title({ children, size, classTitle }: TitleProps) {
  return (
    <h1
      className={`text-gray-700 drop-shadow-sm hover:text-gray-500 hover:drop-shadow-md ${size ? `${size} font-bold` : 'text-lg font-semibold'} ${classTitle}`}
    >
      {children}
    </h1>
  )
}
