import React from 'react';
import tw from 'twin.macro';
import { DrawerAvatar } from './DrawerAvatar';

const Container = tw.div`
  h-screen w-1/4 bg-transparent flex items-center justify-center py-5
`;

const StyledAside = tw.aside`
    flex flex-col justify-start rounded-3xl 
    border-2 border-solid border-blue-600 border-opacity-5
    h-full w-4/5 shadow-2xl
`;

const StyledAsideBody = tw.section`
  flex flex-col flex-grow`;

const StyledAsideBottom = tw.div`
  h-20 w-full rounded-xl bg-transparent
  flex flex-col items-center justify-center shadow-sm
`;

export const Sidedrawer = ({ children }) => {
  return (
    <Container>
      <StyledAside>
        <DrawerAvatar>
        </DrawerAvatar>
        <StyledAsideBody>{children}</StyledAsideBody>
        <StyledAsideBottom>BO</StyledAsideBottom>
      </StyledAside>
    </Container>
  );
};
