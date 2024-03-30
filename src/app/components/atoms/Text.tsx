
import React from "react"

type TextProps = {
    children: React.ReactNode;
}


export default function Text({ children }: TextProps) {
    return (
        <p className="text-sm text-gray-900 text-justify">{children}</p>
    )
}


