import React from 'react'

type HorizontalLineProps = {
    margin?: string
}

export default function HorizontalLine({margin}: HorizontalLineProps) {
    return (
        <hr className={`mx-auto w-10/12 bg-teal-500 h-px ${margin || 'my-4'}`} />
    )
}

