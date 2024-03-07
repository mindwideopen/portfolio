import React from 'react';
import styled from "styled-components";
import FlexWrapper from "../flexwrapper/FlexWrapper";

 const Logo = () => {
    return (

            <LogoStyled>
                <span>Nik</span>
                <span>Lit</span>
            </LogoStyled>


    );
};

const LogoStyled=styled.div`
    
     span {
       
       font-size: 40px;
      
       padding: 0;
     }
        
`
export default Logo;