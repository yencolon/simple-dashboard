import React from 'react';
import Input from '../Input/Input';
import { LinkUrl } from '../Link/LinkUrl';
import FormLayout from '../../layouts/FormLayout';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <FormLayout title="Login">
      <Input title="Email" placeholder="Email" />
      <Input title="Password" placeholder="Password" />
      <Link to="/auth/signup">
        <LinkUrl>Register</LinkUrl>
      </Link>
    </FormLayout>
  );
};

export default LoginForm;
