import React from 'react'

type HorizontalLineProps = {
    margin?: string
}

export default function HorizontalLine(props: HorizontalLineProps) {
    return (
        <hr className={`mx-auto w-10/12 bg-teal-500 h-px ${props.margin || 'my-4'}`} />
    )
}

