import React, { FC } from 'react';
import { styled } from '../../../stitches.config';

const ExampleContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
});

export type ExampleProps = {
  children: React.ReactNode;
};

const Example: FC<ExampleProps> = ({ children }) => {
  return <ExampleContainer>{children}</ExampleContainer>;
};

export default Example;
