import React from 'react';

type TitleProps = {
    children: React.ReactNode;
    size?: string;
}

export default function Title({ children, size }: TitleProps) {
    return (
        <h1 className={`text-gray-700 hover:text-pink-500 drop-shadow-sm hover:drop-shadow-md ${size ? `${size} font-bold` : 'text-lg font-semibold'}`}>{children}</h1>
    );
}
