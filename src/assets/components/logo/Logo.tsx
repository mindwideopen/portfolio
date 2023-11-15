import React from 'react';
import styled from "styled-components";

 const Logo = () => {
    return (
        <LogoStyled>

            <pre>Nick </pre>

            <pre>Lit</pre>

        </LogoStyled>
    );
};

const LogoStyled=styled.div`
    display: flex;
  width:fit-content;
  span {
    display: inline-block;
  }
    
`
export default Logo;