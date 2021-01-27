import React from 'react';
import { styled } from '../../../stitches.config';
import { Link } from 'react-router-dom';

const ContainerSidebar = styled('nav', {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  overflow: 'auto',
  width: '11.625rem',
  background: '$purple700',
  color: '#fff',
});

const LogoContainer = styled('div', {
  fontSize: '$2xl',
  padding: '1.875rem 3.125rem $5 $5',
});

const NavList = styled('ul', {
  listStyleType: 'none',
  lineHeight: 2,
  fontSize: '$l',
});

const LineSeperator = styled('hr', {
  borderColor: '#fff',
  opacity: 0.15,
});

const NavItem = styled('li', {
  display: 'flex',
});

const StyledLink = styled(Link, {
  color: '#fff',
  textDecoration: 'none',
});

const logoTitle = 'Accessible Components';
const btnNavItem = 'Button';
const cardNavItem = 'Card';

const Sidebar = () => {
  return (
    <ContainerSidebar>
      <LogoContainer>{logoTitle}</LogoContainer>
      <LineSeperator aria-hidden='true'></LineSeperator>
      <NavList>
        <NavItem>
          <StyledLink to='/button'>{btnNavItem}</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='/card'>{cardNavItem}</StyledLink>
        </NavItem>
      </NavList>
    </ContainerSidebar>
  );
};

export default Sidebar;
