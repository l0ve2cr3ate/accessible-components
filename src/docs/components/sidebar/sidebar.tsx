import React from "react";
import { styled } from "../../../stitches.config";

const ContainerSidebar = styled("nav", {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    overflow:'auto',
    width: '15.625rem',
    background: '$purple700',
    color:'#fff'
  });

  const LogoContainer = styled("div", {
      fontSize: '$3xl',
      padding: '1.875rem 3.125rem $5 $5'
  })



const Sidebar = () => {
  return (
  <ContainerSidebar>
      <LogoContainer>
          Accessible components
      </LogoContainer>   
     </ContainerSidebar>
  );
};

export default Sidebar;
