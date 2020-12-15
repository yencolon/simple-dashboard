import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`h-16 flex flex-row w-full 
    items-center justify-between px-5`}
  ${(props) => (props.transparent ? tw`bg-transparent text-blue-800` : tw`bg-blue-900 text-gray-100`)}
`;

const Title = tw.h1`
  text-xl pl-5 font-mono
`;

const NavItemContainer = styled.section`
  ${tw``}
`;

const NavItem = tw.span`
  text-base px-5
`;

export const Nav = ({transparent}) => {
  return (
    <Container transparent={transparent}>
      <Title>DashBOARD</Title>
      <NavItemContainer>
        <Link to="/auth">
          <NavItem>Login</NavItem>
        </Link>
        <Link to="/auth/signup">
          <NavItem>Sign up</NavItem>
        </Link>
      </NavItemContainer>
    </Container>
  );
};
