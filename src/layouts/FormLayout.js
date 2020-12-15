import React from 'react';
import tw from 'twin.macro';

const StyledForm = tw.form`
  shadow-md flex flex-col justify-around w-9/12 
  md:w-5/12 lg:w-4/12 mt-5 px-5 py-5 border-blue-400
  border-opacity-10 border-2 bg-white
`;

const StyledTitle = tw.h3`
  text-2xl font-mono`;

const StyledSubmit = tw.input`
  inline-flex w-2/6 justify-center self-center mt-10
  py-2 px-4 border border-transparent shadow-sm text-sm 
  font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
`;

const FormLayout = ({ onSubmit, title, snipText = '', children }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledTitle>{title}</StyledTitle>
      {children}
      <StyledSubmit type="submit" />
    </StyledForm>
  );
};

export default FormLayout;
