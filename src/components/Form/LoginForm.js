import React from 'react';
import Input from './Input';
import { LinkUrl } from '../Link/LinkUrl';
import FormLayout from '../../layouts/FormLayout';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <FormLayout title="Login">
      <Input title="Email" placeholder="Email" />
      <Input title="Password" placeholder="Password" />
      <LinkUrl>
        <Link to="/auth/signup">Register</Link>
      </LinkUrl>
    </FormLayout>
  );
};

export default LoginForm;
