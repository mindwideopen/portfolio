import React from 'react';
import styled from "styled-components";
import FlexWrapper from "../../flexwrapper/FlexWrapper";

import Menu from "../../menu/Menu";




const PortfolioNavigation = (props:{
    menuItems: Array<string>
}) => {
    return (
        <PortfolioNavigationStyled >
          <Menu menuItems={props.menuItems}/>
        </PortfolioNavigationStyled>
    );
};
const PortfolioNavigationStyled=styled.nav`
  display: flex;
  justify-content: space-between;
  width: 486px;
  height: 25px;
 

 

`

export default PortfolioNavigation;