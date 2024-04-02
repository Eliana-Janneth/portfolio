import React from 'react';

type TitleProps = {
    children: React.ReactNode;
    size?: string;
}

export default function Title(props: TitleProps) {
    return (
        <h1 className={`text-pink-700 hover:text-pink-500 drop-shadow-md ${props.size ? `${props.size} font-bold` : 'text-lg font-semibold'}`}>{props.children}</h1>
    );
}
