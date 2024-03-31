import React from 'react';

type TitleProps = {
    children: React.ReactNode;
    size?: string;
}

export default function Title(props: TitleProps) {
    return (
        <h1 className={`font-semibold text-pink-700 hover:text-pink-500 ${props.size ? props.size : 'text-xl'}`}>{props.children}</h1>
    );
}
