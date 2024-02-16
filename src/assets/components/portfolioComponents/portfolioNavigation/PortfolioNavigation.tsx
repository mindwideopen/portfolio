import React from 'react';
import styled from "styled-components";
import FlexWrapper from "../../flexwrapper/FlexWrapper";

const PortfolioNavigation = () => {
    return (
        <PortfolioNavigationStyled >
            <ul>
                <FlexWrapper justify={'space-between'} wrap={'wrap'}>
                    <li>All</li>
                    <li className='divider'></li>
                    <li>Branding</li>
                    <li className='divider'></li>
                    <li>T-Shirt</li>
                    <li className='divider'></li>
                    <li>Package</li>
                    <li className='divider'></li>
                    <li>Poster</li>
                </FlexWrapper>


            </ul>
        </PortfolioNavigationStyled>
    );
};
const PortfolioNavigationStyled=styled.nav`
  width: 486px;
  height: 25px;
  
  .divider {
    width: 4px;
    height: 4px;
    background-color: #929292;
    align-self: center;
    border-radius: 50%;
  }
  
  li:nth-child(odd) {
  color: #929292;  
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
  
}
  

 

`

export default PortfolioNavigation;