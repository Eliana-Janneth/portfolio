
import React from "react"

type TextProps = {
    classText?: string;
    children: React.ReactNode;
}


export default function Text(props: TextProps) {
    return (
        <p className={`text-sm font-normal ${props.classText ? props.classText : 'text-black text-justify'}`}>{props.children}</p>
    )
}


