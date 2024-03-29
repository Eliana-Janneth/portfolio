import React from 'react';

type TitleProps = {
    children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
    return (
        <h1 className='text-xl font-medium font-roboto '>{children}</h1>
    );
}
