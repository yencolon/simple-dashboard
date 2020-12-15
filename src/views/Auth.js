import React from 'react';
import { Switch, Route, useRouteMatch} from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import tw from 'twin.macro';
import LoginForm from '../components/Form/LoginForm';
import SignForm from '../components/Form/SignForm';

const Container = tw.div`
  flex items-center justify-center
`;

const Auth = (props) => {
    const { path } = useRouteMatch();
  return (
    <>
      <Nav />
      <Container>
          <Switch>
              <Route path={`${path}/signup`}>
                  <SignForm />
              </Route>
              <Route path={`${path}/`}>
                <LoginForm />
              </Route>
          </Switch>
      </Container>
    </>
  );
};

Auth.propTypes = {};

export default (Auth);
