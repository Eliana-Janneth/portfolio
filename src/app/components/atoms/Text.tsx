
import React from "react"

type TextProps = {
    children: React.ReactNode;
}


export default function Text({ children }: TextProps) {
    return (
        <p className="text-sm text-black text-justify">{children}</p>
    )
}


