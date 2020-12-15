import React from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';

const SyledInput = tw.input`
  h-10 px-2 bg-gray-50 border-yellow-400 border-2 rounded 
  focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 
  focus:outline-none
`;

const StyledLabel = tw.label`
  block text-sm font-medium text-gray-700 mt-4
`;
const Input = ({ title = '' }) => {
  return (
    <>
      <StyledLabel>{title}</StyledLabel>
      <SyledInput></SyledInput>
    </>
  );
};

Input.propTypes = {
  title: PropTypes.string,
};

export default Input;
