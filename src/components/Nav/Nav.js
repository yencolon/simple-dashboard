import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { StyledButton } from '../Button/Button';

const Container = tw.div`
  bg-yellow-400 h-16 flex flex-row w-full
  items-center justify-between px-5
`;

const Title = tw.h1`
  text-xl text-white pl-5 font-mono
`;

const NavItemContainer = styled.section`
  ${tw``}
`;

const NavItem = tw.span`
  text-white text-base px-5
`;

const Nav = () => {
  return (
    <Container>
      <Title>DashBOARD</Title>
      <NavItemContainer>
        <Link to='/auth'>
          <NavItem>Login</NavItem>
        </Link>
        {/* <Link to='/auth/signup'>
          <NavItem></NavItem>
        </Link> */}
      </NavItemContainer>
    </Container>
  );
};

export default Nav;
