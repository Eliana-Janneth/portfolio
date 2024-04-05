
import React from "react"

type TextProps = {
    classText?: string;
    children: React.ReactNode;
}


export default function Text({classText, children}: TextProps) {
    return (
        <p className={`text-sm font-normal ${classText ? classText : 'text-black text-justify'}`}>{children}</p>
    )
}


