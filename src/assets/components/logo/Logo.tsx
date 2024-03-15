import React from 'react';
import styled from "styled-components";


 const Logo = () => {
    return (

            <LogoStyled>
                <span>Nikolay</span>
                <span>Litvinov</span>
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