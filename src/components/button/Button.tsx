import React, { FC } from 'react';
import { styled } from '../../stitches.config';

const ButtonContainer = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '$base',
  lineHeight: '1',
  fontWeight: '$400',
  paddingTop: '$3',
  paddingBottom: '$3',
  paddingLeft: '$4',
  paddingRight: '$4',
  border: '0',
  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 0.625rem 1.5625rem rgba(0, 0, 0, .3)',
  },
  variants: {
    color: {
      violet: {
        backgroundColor: '$purple600',
        color: 'white',
        ':hover': {
          backgroundColor: '$purple700',
        },
      },
      gray: {
        backgroundColor: '$gray500',
        ':hover': {
          backgroundColor: '$gray600',
          color: '#fff',
        },
      },
    },
  },
});

export type ButtonProps = {
  children?: React.ReactNode;
  color?:
    | 'gray'
    | 'violet'
    | { initial?: 'gray' | 'violet' | undefined }
    | undefined;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ children, onClick, color }) => {
  return (
    <ButtonContainer onClick={onClick} color={color}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
