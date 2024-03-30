
import React from "react"

type TextProps = {
    classText?: string; 
    children: React.ReactNode;
}


export default function Text(props: TextProps) {
    return (
<p className={`text-sm text-black text-justify ${props.classText}`}>{props.children}</p>
    )
}


