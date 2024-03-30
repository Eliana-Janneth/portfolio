import React from 'react';

type TitleProps = {
    children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
    return (
        <h1 className='text-xl font-semibold text-pink-900 hover:text-pink-500'>{children}</h1>
    );
}
