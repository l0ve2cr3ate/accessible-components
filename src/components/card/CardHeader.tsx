import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';

const StyledLink = styled(Link, {
  textDecoration: 'none',
  color: '$gray600',
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});

export type CardHeaderProps = {
  /**
   * Make the title clickable
   */
  to?: string;
  /**
   * Title of the card
   */
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
