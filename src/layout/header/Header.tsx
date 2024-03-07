import React from 'react';
import styled from "styled-components";
import Logo from "../../assets/components/logo/Logo";
import Menu from "../../assets/components/menu/Menu";
import Intro from "../../assets/components/intro/Intro";
import FlexWrapper from "../../assets/components/flexwrapper/FlexWrapper";


const items = ["Home", "About", "Services", "Portfolio","Store"]
export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify={'space-between'}>
                <Logo/>
                <Menu menuItems={items}/>
            </FlexWrapper>

            <Intro/>
        </StyledHeader>
    );
};
const StyledHeader=styled.header`
  
background-color: aquamarine;
  
`

