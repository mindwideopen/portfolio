import React from 'react';
import styled from "styled-components";
import FlexWrapper from "../flexwrapper/FlexWrapper";

 const Logo = () => {
    return (
        <FlexWrapper>
            <LogoStyled>
                <p>Nik</p>
            </LogoStyled>
        </FlexWrapper>

    );
};

const LogoStyled=styled.div`
    
     p {
       
       font-size: 40px;
       margin: 0;
       margin-left: 10px;
       padding: 0;
     }
        p:after {
      content: ' Lit ';
      font-size: 40px;
          margin: 0;
          padding: 0;
    }
`
export default Logo;