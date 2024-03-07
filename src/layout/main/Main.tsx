import React from 'react';
import styled from "styled-components";
import Intro from "../../assets/components/intro/Intro";


const Main = () => {
    return (
        <MainStyled>
            <Intro/>
        </MainStyled>
    );
};

const MainStyled=styled.main`
  
  
  
  background-color: cornflowerblue;
  position:relative
  

`

export default Main;