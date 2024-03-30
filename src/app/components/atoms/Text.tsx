
import React from "react"

type TextProps = {
    children: React.ReactNode;
}


export default function Text({ children }: TextProps) {
    return (
        <p className="font-roboto text-base text-gray-700 text-justify">{children}</p>
    )
}


