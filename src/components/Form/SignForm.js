import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import { LinkUrl } from '../Link/LinkUrl';
import FormLayout from '../../layouts/FormLayout';

const SignForm = () => {
  return (
    <FormLayout title="Sign">
      <Input title="Name" placeholder="Your name" />
      <Input title="Lastname" placeholder="Your lastname" />
      <Input title="Email" placeholder="Your email" />
      <Input title="Password" placeholder="Your Password" />
      <Input title="Repit  Password" placeholder="Repit your Password" />
      <Link to="/auth">
        <LinkUrl>Have an account? Login</LinkUrl>
      </Link>
    </FormLayout>
  );
};

export default SignForm;
