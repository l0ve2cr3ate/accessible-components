import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';

const StyledLink = styled(Link, {
  textDecoration: 'none',
});

export type CardHeaderProps = {
  to?: string;
  title: string;
};

const CardHeader: FC<CardHeaderProps> = ({ to, title }) => {
  if (to) {
    return (
      <StyledLink to={to}>
        <h2>{title}</h2>
      </StyledLink>
    );
  }
  return <h2>{title}</h2>;
};

export default CardHeader;
