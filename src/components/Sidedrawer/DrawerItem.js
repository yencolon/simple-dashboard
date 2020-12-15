import React from 'react'
import tw from 'twin.macro';

const StyledItem = tw.a`
    text-lg border-b border-solid border-blue-800 border-opacity-50 font-sans 
    text-gray-200 text-right p-2 hover:bg-blue-500
`;

export const DrawerItem = ({children, href}) => {
    return (
        <StyledItem href={href}>
            {children}
        </StyledItem>
    )
}
