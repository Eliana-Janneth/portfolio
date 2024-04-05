import React from 'react'

type TitleProps = {
  children: React.ReactNode
  size?: string
}

export default function Title({ children, size }: TitleProps) {
  return (
    <h1
      className={`text-gray-700 drop-shadow-sm hover:text-pink-500 hover:drop-shadow-md ${size ? `${size} font-bold` : 'text-lg font-semibold'}`}
    >
      {children}
    </h1>
  )
}
