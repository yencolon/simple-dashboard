import React from 'react';
import Sidedrawer, { DrawerItem } from '../components/Sidedrawer';
import tw from 'twin.macro';
import Nav from '../components/Nav';

const Container = tw.div`
    flex flex-row bg-gray-800
`;

const MainContent = tw.section`
  flex flex-col flex-grow
`;

export const Dashboard = ({ children }) => {
  const routes = () => {
  }

  return (
    <Container>
      <Sidedrawer>
        <DrawerItem href="/">Overview</DrawerItem>
        <DrawerItem href="/stuff">My Stuff</DrawerItem>
        <DrawerItem href="/Stuff">Another Stuff</DrawerItem>
      </Sidedrawer>
      <MainContent>
        <Nav transparent/>
        {children}
      </MainContent>
    </Container>
  );
};
