import React, { FC } from 'react';
import { styled } from '../../stitches.config';

const ContainerCard = styled('div', {
  position: 'relative',
  backgroundColor: '#fafafa',
  color: '#333',
  width: 'calc(35% - 1.25rem)',
  padding: '0.625rem',
  borderRadius: '0.625rem',
  margin: '0.625rem',
  height: '21.875rem',
  boxShadow: 'inset 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.06)',
});

export type CardProps = {
  children: React.ReactNode;
};

const Card: FC<CardProps> = ({ children }) => {
  return <ContainerCard>{children}</ContainerCard>;
};

export default Card;
