import React from 'react';
import tw from 'twin.macro';

const StyledLink = tw.span`
    text-blue-700 mt-1 text-right
`;

export const LinkUrl = ({ children }) => {
  return <StyledLink>{children}</StyledLink>;
};
