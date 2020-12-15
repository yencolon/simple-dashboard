import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledAsideTop = tw.div`
  h-20 w-full rounded-t-xl bg-transparent flex flex-row 
  items-center justify-around shadow-sm
  bg-gradient-to-r from-blue-600 to-purple-800
`;

const Avatar = tw.div`
    h-16 w-16 rounded-full bg-gray-100
`;

const Information = styled.div`
    ${tw`font-mono text-white text-sm`}
    & :first-child {
        ${tw`text-xl`}
    }
`;

export const DrawerAvatar = () => {
  return (
    <StyledAsideTop>
      <Avatar></Avatar>
      <Information>
        <p>Yen Colon</p>
        <p>yenjcc@gmail.com</p>
      </Information>
    </StyledAsideTop>
  );
};
